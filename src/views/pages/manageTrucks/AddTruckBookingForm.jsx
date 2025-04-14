import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {  addDays } from 'date-fns'; // Importing from date-fns library
import dayjs from 'dayjs';

export default function AddTruckBookingForm(props) {
  const [open, setOpen] = React.useState(false);
//   const [fullWidth, setFullWidth] = React.useState(true);
const [selectedDate, setSelectedDate] = React.useState(dayjs());



  const currentDate = new Date();
  const minDate = currentDate; // Current date
  const maxDate = addDays(currentDate, 30); // max date (30+ days)

  const dateObj = new Date(minDate);

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;



  const dateObj1 = new Date(maxDate);
    
  const year1 = dateObj1.getFullYear();
  const month1 = String(dateObj1.getMonth() + 3).padStart(2, "0");
  const day1 = String(dateObj1.getDate()).padStart(2, "0");

  const formattedDate1 = `${year1}-${month1}-${day1}`;

  const handleClose = () => {
    setOpen(false);
    props.onClose()
  };

  React.useEffect(()=>{
setOpen(props.open)
  },[props])

  


//   const handleFullWidthChange = (event) => {
//     setFullWidth(event.target.checked);
//   };

const handleSubmit =() => {
if(!selectedDate ){
    console.log("Please select a date")
}
const availableFrom = dayjs(selectedDate).format('YYYY-MM-DD'); // Format the date as per your API requirements

let truckId = props.data._id
props.submit({truckId,availableFrom})
handleClose()
}
  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Select Date</DialogTitle>
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
        <DialogContent>
          <DialogContentText>
           Select FromDate from which truck is open for booking.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <DatePicker
        label="From Date"
        disabled
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        minDate={dayjs(formattedDate)}
        maxDate={dayjs(formattedDate1)}
        renderInput={(params) => <TextField {...params} />}
      />

            </FormControl>
            {/* <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            /> */}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSubmit}>ADD TO QUEUE</Button>
        </DialogActions>
      </Dialog>
      </LocalizationProvider>
    </React.Fragment>
  );
}
