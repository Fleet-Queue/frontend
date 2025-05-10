import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import storage from "../../../utils/firebase-config";
import { TextField, IconButton, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import { updateDo, uploadDo } from 'utils/Service';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL 
} from "firebase/storage";
import { CloudUpload as CloudUploadIcon, Close as CloseIcon } from '@mui/icons-material';
import { Box } from '@mui/system';
import { v4 as uuidv4 } from 'uuid'; 

export default function AddForm(props) {
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState(null); // Single file state
  const [percent, setPercent] = React.useState(null);
  const [currentUploadIndex, setCurrentUploadIndex] = React.useState(0);
  const [totalUploads, setTotalUploads] = React.useState(0);
  const [isUploading, setIsUploading] = React.useState(false);
  // Define initial values for "Select Data" and "Date Available From"
  const today = new Date().toISOString().split('T')[0];
  const [dateAvailable, setDateAvailable] = React.useState(today);
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      name: props.data?.name || '',
      location: props.data?.location || '',
      selectData: props.data?.selectData || '20',
      dateAvailableFrom: props.data?.dateAvailableFrom || today,
      numberOfOrders: props.data?.numberOfOrders || 1,
    },
  });

  const handleClose = () => {
    props.onClose();
    setPercent(null);
    setFile(null); // Reset file state
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  React.useEffect(() => {
    if (props.upd) {
      setValue('name', props.data.name || ''); 
      setValue('location', props.data.location || ''); 
      setValue('selectData', props.data.selectData || "20");
      setValue('numberOfOrders', props.data.numberOfOrders || 1);
      setDateAvailable(props.data.dateAvailableFrom || today); 
      // Keep track of existing file info but don't set as a file object
    } else {
      setValue('name', ''); 
      setValue('location', ''); 
      setValue('selectData', "20");
      setValue('numberOfOrders', 1);
      setDateAvailable(today); 
      setFile(null);
    }
  }, [props]);

  const uploadFile = async (file, name, location, availableFrom, type) => {
    const uniqueName = `${name}-${uuidv4()}`;
    const storageRef = ref(storage, `/DoBookings/${uniqueName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(percent);
        },
        (err) => reject(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((DownloadUrl) => {
            if (props.upd) {
              updateDo(props.data._id, { 
                doLink: DownloadUrl, 
                name: name, 
                location: location,
                uniqueName: uniqueName, 
                fileName: file.name,
                availableFrom: availableFrom,
                type: type 
              })
              .then(() => {
                resolve();
              })
              .catch((err) => {
                reject(err);
              });
            } else {
              uploadDo({ 
                doLink: DownloadUrl, 
                name: name, 
                location: location,
                uniqueName: uniqueName, 
                fileName: file.name,
                availableFrom: availableFrom,
                type: type 
              })
              .then(() => {
                resolve();
              })
              .catch((err) => {
                reject(err);
              });
            }
          });
        }
      );
    });
  };

  const onSubmit = async (data) => {
    const { name, dateAvailableFrom, selectData, location, numberOfOrders } = data;
    
    // For both create and update, check if a file is selected
    if (!file && !props.upd) {
      toast.error("Please choose a file to upload");
      return;
    }
    
    // Set upload status tracking variables
    setIsUploading(true);
    setTotalUploads(parseInt(numberOfOrders));
    setCurrentUploadIndex(0);
    
    // Only proceed with uploads for new records (creation)
    if (!props.upd) {
      try {
        // Loop through the number of orders and upload the same file multiple times
        for (let i = 0; i < parseInt(numberOfOrders); i++) {
          setCurrentUploadIndex(i + 1);
          
          // Show toast notification for each upload
          toast.info(`Uploading file ${i + 1} of ${numberOfOrders}...`, {
            autoClose: 2000
          });
          
          await uploadFile(file, name, location, dateAvailableFrom, selectData);
        }
        
        toast.success(`${numberOfOrders} delivery orders uploaded successfully!`);
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data?.message || "Failed to upload file");
      }
    } else {
      // For updates, maintain the original behavior
      if (file) {
        try {
          await uploadFile(file, name, location, dateAvailableFrom, selectData);
          toast.success("DO updated successfully!");
        } catch (err) {
          console.log(err);
          toast.error(err.response?.data?.message || "Failed to upload file");
        }
      } else {
        // If updating but no new file was selected, just update the other fields
        try {
          await updateDo(props.data._id, {
            name: name,
            location: location,
            availableFrom: dateAvailableFrom,
            type: selectData,
            numberOfOrders: numberOfOrders
          });
          toast.success("DO updated successfully!");
        } catch (err) {
          console.log(err);
          toast.error(err.response?.data?.message || "Failed to update DO");
        }
      }
    }
    
    setIsUploading(false);
    handleClose();
  };

  const handlePreview = () => {
    if (props.upd && !file && props.data.doLink) {
      // Open the existing file URL in a new tab for updates
      window.open(props.data.doLink, '_blank');
    } else if (file) {
      // Create object URL for selected file and open in new tab
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>
            {!props.upd ? "Upload DO" : "Update DO"}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Upload Delivery Orders.
            </DialogContentText>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("name", { required: true })}
              error={!!errors.name}
              helperText={errors.name ? 'Name is required' : ''}
            />
            
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("location", { required: true })}
              error={!!errors.location}
              helperText={errors.location ? 'Location is required' : ''}
            />

            {/* Select Data Input */}
            <TextField
              select
              label="Select Truck Type"
              fullWidth
              margin="normal"
              {...register("selectData", { required: true })} 
              onChange={(e) => setValue('selectData', e.target.value)}
              error={!!errors.selectData}
              helperText={errors.selectData ? 'Select data is required' : ''}
              defaultValue="20"
            >
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="40">40</MenuItem>
            </TextField>

            {/* Date Available From */}
            <TextField
              label="Date Available From"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={dateAvailable}
              onChange={(e) => setDateAvailable(e.target.value)}
              {...register("dateAvailableFrom", { required: true })}
              error={!!errors.dateAvailableFrom}
              helperText={errors.dateAvailableFrom ? 'Date is required' : ''}
              min={today}
            />
            
            {/* Number of Orders - Only show for new uploads */}
            {!props.upd && (
              <TextField
                label="Number of Orders"
                type="number"
                fullWidth
                margin="normal"
                InputProps={{ inputProps: { min: 1 } }}
                {...register("numberOfOrders", { 
                  required: true,
                  min: { value: 1, message: 'Minimum 1 order required' },
                  validate: value => parseInt(value) > 0 || 'Must be a positive number'
                })}
                error={!!errors.numberOfOrders}
                helperText={errors.numberOfOrders ? errors.numberOfOrders.message || 'Number of orders is required' : ''}
              />
            )}
            
            {/* File upload section - same for both new and update */}
            <input
              accept="image/*,.pdf"
              style={{ display: 'none' }}
              id="file-upload"
              type="file"
              onChange={(e) => {
                const selectedFile = e.target.files[0];
                if (selectedFile) {
                  setFile(selectedFile);
                }
              }}
            />
            
            {/* Show existing file info for updates */}
            {props.upd && !file && props.data.fileName && (
              <Box mt={2} mb={2}>
                <Typography variant="body1">
                  Current File: {props.data.fileName}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handlePreview} 
                  sx={{ mt: 1 }}
                >
                  Preview Existing File
                </Button>
              </Box>
            )}
            
            {/* Show selected file info */}
            {file && (
              <Box mt={2} mb={2}>
                <Typography variant="body1">
                  {props.upd ? "New File: " : "Selected File: "}{file.name}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handlePreview}
                  sx={{ mt: 1 }}
                >
                  Preview File
                </Button>
              </Box>
            )}
            
            {/* Upload button/area */}
            <label htmlFor="file-upload">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={150}
                sx={{ 
                  border: '1px dashed grey', 
                  cursor: 'pointer', 
                  marginTop: 2,
                  backgroundColor: file ? '#f0f8ff' : 'transparent'
                }}
              >
                <CloudUploadIcon style={{ fontSize: 100 }} />
              </Box>
              <Typography
                variant="h6"
                align="center"
                sx={{ marginTop: 1, marginBottom: 1 }}
              >
                {props.upd ? "Upload New File" : "Upload File"}
              </Typography>
            </label>

            {percent !== null && (
              <Box sx={{ width: '100%', marginTop: 2 }}>
                <LinearProgressWithLabel value={percent} />
                {isUploading && !props.upd && (
                  <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                    Uploading file {currentUploadIndex} of {totalUploads}
                  </Typography>
                )}
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="outlined" disabled={isUploading}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" disabled={isUploading}>
              {isUploading ? 'Uploading...' : 'Submit'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};