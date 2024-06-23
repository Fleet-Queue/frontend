import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import storage from "../../../utils/firebase-config"
import { TextField, FormHelperText } from '@mui/material';
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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box } from '@mui/system';

export default function AddForm(props) {
  const [open, setOpen] = React.useState(false);
  const [fileName, setFileName] = React.useState('');
  const [percent, setPercent] = React.useState(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {},
  });

  const handleClose = () => {
    props.onClose();
    setPercent(null);
    setFileName('');
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const onSubmit = async (data) => {
    const { file, name } = data;
    if (!file) {
      toast.error("Please choose a file");
      return;
    }

    const storageRef = ref(storage, `/DoBookings/${name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
        console.log(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((DownloadUrl) => {
  
          try {
            uploadDo({ "doLink": DownloadUrl, "name": name }).then(() => {
              handleClose();
            }).catch(err =>{
console.log(err)

             toast.error(err.response.data.message)
          });
          } catch (error) {
            console.error("Failed to create DO:", error);
            toast.error("Failed to create DO");
          }
        });
      }
    );
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
          <DialogTitle>Upload DO</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Upload Delivery Order.
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
              onChange={(e) => {
                const file = e.target.files[0];
                setFileName(file ? file.name : '');
                setValue("file", file);
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
              {percent !== null && (
                <Box sx={{ width: '100%' }}>
                  <LinearProgressWithLabel value={percent} />
                </Box>
              )}
            </label>
            {fileName && <FormHelperText>{fileName}</FormHelperText>}
          </DialogContent>
          <DialogActions>
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
