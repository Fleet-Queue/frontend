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
import { getAllParties } from '../../../utils/Service';
export default function AddBookingForm(props) {
  const [open, setOpen] = React.useState(false);
  const [parties, setParties] = React.useState([]);
 
//   const [fullWidth, setFullWidth] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(dayjs());

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
} = useForm({
    defaultValues: {
        type: 20, // Default value for type
        rate: 0
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
      reset();
    setOpen(false);
  };


  React.useEffect(() => {
   
    getAllParties({companyId:props.data}).then((data)=>{
        console.log(data)
        setParties(data)
        if (data && data.length > 0) {
          // Default to the first party if none selected
          reset((formValues) => ({
            ...formValues,
            party: data[0]._id,
          }));
        }
         }).catch((error) => {
      console.log(error)
      toast.error(error)
         })
 }, [props.data])
   
 
  React.useEffect(()=>{
setOpen(props.open)
  },[props])

  const onSubmit = async  (data) => {
    if (!selectedDate ) {

      toast.error("Please select a date")
      return;
    }
    if (!props.doId ) {
      toast.error("Delivery order Id missing")
      return;
    }
    const availableFrom = dayjs(selectedDate).format('YYYY-MM-DD');
    const { type,rate,party } = data;
    // const partyId = props.data;
    console.log({party, availableFrom, type,doId:props.doId,companyId:props.data,rate})
    
    try {
        await createDo({ partyId:party,deliveryOrderId:props.doId, availableFrom, truckType: type, rate: rate,companyId:props.data });
        toast.success("Do Created Successfully, now you can allocate truck");
        handleClose();
      } catch (error) {
        console.error("Failed to create DO:", error);
        toast.error("Failed to create DO");
      }
     
  };


// const handleSubmitting =() => {
// if(!selectedDate ){
//     console.log("Please select a date")
// }
// const availableFrom = dayjs(selectedDate).format('YYYY-MM-DD'); // Format the date as per your API requirements

// console.log(availableFrom)
// console.log(selectedDate)
// console.log(props.data)
// let partyId = props.data._id
// props.submit({partyId,availableFrom})
// handleClose()
// }
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
        <DialogTitle>
        <Typography variant="h3" fontWeight="bold">
    ADD Booking
  </Typography>
        </DialogTitle>
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
              {/* Upload Delivery Orderd */}
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


<FormControl error={Boolean(errors.driver)}>
                            <InputLabel id="type-select-label">Party</InputLabel>
                            <Controller
                                name="party"
                                control={control}
                               
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        labelId="type-select-label"
                                        id="type-select"
                                        label="party"
                                        value={field.value || ''}
                                        onChange={(e) => {
                                            field.onChange(e.target.value);
                                        }}
                                    >
                                  <MenuItem value=""><em>None</em></MenuItem>
                                        {
                                              
                                            parties.map((data)=>(
                                                <MenuItem key={data._id} value={data._id}>{data.name} Mob: {data.contactNumber} Address: {data.address} </MenuItem>
                                            ))
                                        }
                                       
                                    </Select>
                                )}
                                rules={{ required: "Party is required" }}
                            />
                            {errors.party && (
                                <FormHelperText>{errors.party.message}</FormHelperText>
                            )}
                        </FormControl>

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
