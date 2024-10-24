import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import storage from "../../../utils/firebase-config"
import { TextField, FormHelperText, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { uploadDo } from 'utils/Service';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL 
} from "firebase/storage";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CloudUpload as CloudUploadIcon, Close as CloseIcon } from '@mui/icons-material';
import { Box } from '@mui/system';
import { v4 as uuidv4 } from 'uuid'; 

export default function AddForm(props) {
  const [open, setOpen] = React.useState(false);
  const [fileNames, setFileNames] = React.useState([]);
  const [percent, setPercent] = React.useState(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {},
  });

  const handleClose = () => {
    props.onClose();
    setPercent(null);
    setFileNames([]);
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const uploadFile = async (file, name) => {
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
            uploadDo({ "doLink": DownloadUrl, "name": name,"uniqueName":uniqueName,fileName: file.name })
              .then(() => {
                resolve();
              })
              .catch((err) => {
                reject(err);
              });
          });
        }
      );
    });
  };

  const onSubmit = async (data) => {
    const { files, name } = data;
    if (!files || files.length === 0) {
      toast.error("Please choose at least one file");
      return;
    }

    for (let file of files) {
      try {
        await uploadFile(file, name);
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data?.message || "Failed to upload file");
        break;  // Stop on error
      }
    }

    handleClose();
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
          <DialogTitle>Upload DO
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
            
            <input
              accept="image/*,.pdf"
              style={{ display: 'none' }}
              id="raised-button-file"
              type="file"
              multiple  // Allow multiple files
              onChange={(e) => {
                const files = Array.from(e.target.files);
                setFileNames(files.map(file => file.name));
                setValue("files", files);
              }}
            />
            <label htmlFor="raised-button-file">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={150}
              >
                <CloudUploadIcon style={{ fontSize: 100 }} />

              </Box>

              <Typography
              variant="h6"
              align="center"
              sx={{ marginTop: 1, marginBottom: 1 }}
            >
              Upload Files
            </Typography>
              {percent !== null && (
                <Box sx={{ width: '100%' }}>
                  <LinearProgressWithLabel value={percent} />
                </Box>
              )}
            </label>
            {fileNames.length > 0 && fileNames.map((name, index) => (
              <FormHelperText key={index}>{name}</FormHelperText>
            ))}
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
