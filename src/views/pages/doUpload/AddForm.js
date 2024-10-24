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
  const [files, setFiles] = React.useState([]); // State for multiple files
  const [singleFile, setSingleFile] = React.useState(null); // State for single file during update
  const [percent, setPercent] = React.useState(null);
    // Define initial values for "Select Data" and "Date Available From"
    const today = new Date().toISOString().split('T')[0];
    const [dateAvailable, setDateAvailable] = React.useState(today);
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      name: props.data?.name || '',
      selectData: props.data?.selectData || '20',
      dateAvailableFrom: props.data?.dateAvailableFrom || today,
    },
  });

  const handleClose = () => {
    props.onClose();
    setPercent(null);
    setFiles([]); // Reset multiple files state
    setSingleFile(null); // Reset single file state
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  React.useEffect(() => {
    if (props.upd) {
      setValue('name', props.data.name || ''); 
      setValue('selectData', props.data.selectData || "20") // Set the existing value for "Select Data"
      setDateAvailable(props.data.dateAvailableFrom || today); 
      setSingleFile(props.data.link || null); // Populate file URL if updating
    } else {
      setValue('name', ''); 
      setValue('selectData', "20");
      setDateAvailable(today); 
    }
  }, [props]);

  const uploadFile = async (file, name,availableFrom,type) => {
    const uniqueName = `${name}-${uuidv4()}`;
    const storageRef = ref(storage, `/DoBookings/${uniqueName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
   console.log(type)
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
                uniqueName: uniqueName, 
                fileName: file.name,
                availableFrom:availableFrom,
                type:type 
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
                uniqueName: uniqueName, 
                fileName: file.name,
                availableFrom:availableFrom,
                type:type 
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
    const { name,dateAvailableFrom,selectData } = data;
    console.log(data)
    // Handle multiple file uploads for creation
    if (!props.upd) {
      if (files.length === 0) {
        toast.error("Please choose at least one file to upload");
        return;
      }

      for (let file of files) {
        try {
          console.log("heyyy")
          await uploadFile(file, name,dateAvailableFrom,selectData );
        } catch (err) {
          console.log(err);
        
          toast.error(err.response?.data?.message || "Failed to upload file");
          break;  // Stop on error
        }
      }
      toast.success("DO uploaded successfully!");
    } else { // Handle single file upload for updates
      const fileToUpload = singleFile && files.length > 0 ? files[0] : null;

      if (!fileToUpload && !singleFile) {
        toast.error("Please choose a file to upload or retain the existing one.");
        return;
      }
      
      try {
        await uploadFile(fileToUpload || singleFile, name);
        toast.success("DO updated successfully!");
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data?.message || "Failed to update file");
      }
    }

    handleClose();
  };

  const handleRemoveFile = (index) => {
    const removedFile = files[index];
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove the selected file

    // Create a new File object to allow the user to select it again
    const dataTransfer = new DataTransfer();
    for (let i = 0; i < files.length; i++) {
      if (i !== index) {
        dataTransfer.items.add(files[i]);
      }
    }
    
    // Set the input value to the updated file list
    const fileInput = document.getElementById('multiple-file-upload');
    fileInput.files = dataTransfer.files;

    toast.success(`${removedFile.name} removed successfully.`);
  };

  const handlePreview = () => {
    if (props.upd && singleFile) {
      // Open the existing file URL in a new tab for updates
      window.open(singleFile, '_blank');
    } else {
      // Create object URLs for selected files and open in new tabs
      files.forEach((file) => {
        const fileUrl = URL.createObjectURL(file);
        window.open(fileUrl, '_blank');
      });
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
            
              {/* Select Data Input */}
              <TextField
              select
              label="Select Data"
              fullWidth
              margin="normal"
              {...register("selectData", { required: true })} 
              onChange={(e) => setValue('selectData', e.target.value)} // Update react-hook-form value
              error={!!errors.selectData}
              helperText={errors.selectData ? 'Select data is required' : ''}
              defaultValue="20" // Default select value
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
              value={dateAvailable} // Set value to current date
              onChange={(e) => setDateAvailable(e.target.value)}
              {...register("dateAvailableFrom", { required: true })}
              error={!!errors.dateAvailableFrom}
              helperText={errors.dateAvailableFrom ? 'Date is required' : ''}
              min={today} // Disable past dates
            />
            {!props.upd ? ( // Allow multiple file uploads for new creation
              <>
                <input
                  accept="image/*,.pdf"
                  style={{ display: 'none' }}
                  id="multiple-file-upload"
                  type="file"
                  multiple
                  onChange={(e) => {
                    const selectedFiles = Array.from(e.target.files);
                    setFiles(selectedFiles); // Set multiple files
                    setValue("files", selectedFiles); // Set form value if needed
                  }}
                />
                <label htmlFor="multiple-file-upload">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height={150}
                    sx={{ border: '1px dashed grey', cursor: 'pointer' }}
                  >
                    <CloudUploadIcon style={{ fontSize: 100 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ marginTop: 1, marginBottom: 1 }}
                  >
                    {files.length > 0 ? `Selected Files: ${files.map(f => f.name).join(', ')}` : "Upload Files"}
                  </Typography>
                </label>
                {files.length > 0 && (
                  <Box mt={2}>
                    {files.map((file, index) => (
                      <Box key={index} display="flex" alignItems="center" justifyContent="space-between">
                        <Typography variant="body2">{file.name}</Typography>
                        <Button variant="outlined" color="error" onClick={() => handleRemoveFile(index)}>
                          Remove
                        </Button>
                      </Box>
                    ))}
                  </Box>
                )}
              </>
            ) : ( // Allow single file upload for updates
              <>
                {/* Show existing file name initially */}
                {singleFile && !files.length && (
                  <Typography variant="body1">
                    Existing File: {props.data.fileName} {/* Show original file name */}
                  </Typography>
                )}


{props.upd && files.length > 0 && (
  <Typography variant="body1">
    Updated File: {files[0].name} 
  </Typography>
)}
                <input
                  accept="image/*,.pdf"
                  style={{ display: 'none' }}
                  id="single-file-upload"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setFiles([file]); 
                    setSingleFile(file.name); 
                  }}
                />
                <label htmlFor="single-file-upload">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height={150}
                    sx={{ border: '1px dashed grey', cursor: 'pointer', marginTop: 2 }}
                  >
                    <CloudUploadIcon style={{ fontSize: 100 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ marginTop: 1, marginBottom: 1 }}
                  >
                    Upload New File
                  </Typography>
                </label>
                {!files.length &&
                <Button variant="contained" color="primary" onClick={handlePreview} style={{ marginTop: 10 }}>
                
                  Preview Existing File
                </Button>
                }
              </>
            )}

            {percent !== null && (
              <Box sx={{ width: '100%', marginTop: 2 }}>
                <LinearProgressWithLabel value={percent} />
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Submit
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
