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
import { FormHelperText, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Controller,useForm } from 'react-hook-form';
import { createDo } from 'utils/Service';
import { toast } from 'react-toastify';
export default function AddForm(props) {
  const [open, setOpen] = React.useState(false);
//   const [fullWidth, setFullWidth] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(null);

  const {
    control,
    handleSubmit,
   
    formState: { errors },
} = useForm({
    defaultValues: {
        type: 20, // Default value for type
      },
})

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

      props.onClose()
    setOpen(false);
  };

  React.useEffect(()=>{
setOpen(props.open)
  },[props])

  const onSubmit = async  (data) => {
    if (!selectedDate) {
    
      toast.error("Please select a date")
      return;
    }
    const availableFrom = dayjs(selectedDate).format('YYYY-MM-DD');
    const { type,rate } = data;
    const partyId = props.data;

    try {
        await createDo({ partyId, availableFrom, truckType: type, rate: rate });
        handleClose();
      } catch (error) {
        console.error("Failed to create DO:", error);
        toast.error("Failed to create DO");
      }
     
  };


  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
      >
         <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>ADD Booking</DialogTitle>
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
              Upload Delivery Order
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
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  minDate={dayjs(formattedDate)}
                  maxDate={dayjs(formattedDate1)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </FormControl>
              <FormControl error={Boolean(errors.type)} sx={{ mt: 2 }}>
                <InputLabel id="type-select-label">Type</InputLabel>
                <Controller
                  name="type"
                  control={control}
                  defaultValue={20}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="type-select-label"
                      id="type-select"
                      label="Type"
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      <MenuItem value={20}>20 FT</MenuItem>
                      <MenuItem value={40}>40 FT</MenuItem>
                    </Select>
                  )}
                  rules={{ required: "Type is required" }}
                />
                {errors.type && (
                  <FormHelperText>{errors.type.message}</FormHelperText>
                )}
              </FormControl>

              <Typography variant='h5'>Rate</Typography>
                        <Controller
                            name="rate"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Enter Rate" />
                                    {errors.rate && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.rate.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "Rate is required" }}
                        />

            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" type="submit">
              ADD Booking
            </Button>
          </DialogActions>
            </form>
        </Dialog>
      </LocalizationProvider>
    </React.Fragment>
  );
}
