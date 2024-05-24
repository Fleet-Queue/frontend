import { Button, Container, MenuItem, Select, Stack, TextField, Typography,  FormControl, InputLabel, FormHelperText, FormControlLabel, Switch } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";

import { toast } from 'react-toastify';
import StyledDialog from 'ui-component/StyledDialog';
import { addParty,getAllLocation  } from 'utils/Service';

export default function PartyAddForm({ getParty, open, onClose, isEdit = false, data={} }) {
    const [locations, setLocations] =useState([]);
    const [isTrailerAllowed, setIsTrailerAllowed] =useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: isEdit ? data["Name"] : ''
    })

    const onSubmit = (data) => {
    console.log(data)
    addParty({ name:data.name,
        address:data.address,
        locationId:data.location,
        contactPerson:data.contactPerson,
        contactNumber:data.contactNumber,
        isTrailerAllowed
    })
        .then((response) => {
          console.log(response);
          getParty()
          onClose();
        }) .catch((error) => {
                console.error(error);
                toast.error(error);
               
              });
          
        
    }


  
       
    


     useEffect(() => {
        getAllLocation().then((data)=>{
            console.log(data)
            setLocations(data)
             }).catch((error) => {
          console.log(error)
             })
     }, [])
     
        
    return (
        
        <StyledDialog open={open} fullWidth onClose={()=>{
    
            onClose()
        }}  title={`${isEdit ? "Edit" : "Add"} Party`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Stack direction={'column'} sx={{ p: 2 }} spacing={1}>
                        {/* <Typography variant='h5'>Select Image </Typography>
                        <MuiFileInput
                            value={file}
                            onChange={(e) => { selectFile(e) }}
                            placeholder='select File'
                            InputProps={{
                                inputProps: {
                                    accept: 'image/*'
                                },
                                startAdornment: <AttachFile />,
                                placeholder: 'Select File'
                            }}
                        /> */}
                        <Typography variant='h5'>Party Name</Typography>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Enter Party Name" />
                                    {errors.name && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.name.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "Party Name is required" }}
                        />

<Typography variant='h5'>Address</Typography>
                        <Controller
                            name="address"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Enter party address" />
                                    {errors.address && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.address.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "Address is required" }}
                        />

<Typography variant='h5'>Contact Person Name</Typography>
                        <Controller
                            name="contactPerson"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Enter contact person name" />
                                    {errors.contactPerson && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.contactPerson.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "contactPerson name is required" }}
                        />

<Typography variant='h5'>contact Number</Typography>
                        <Controller
                            name="contactNumber"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Enter contact number" />
                                    {errors.contactNumber && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.contactNumber.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "contactNumber is required" }}
                        />

<FormControl error={Boolean(errors.location)}>
                            <InputLabel id="type-select-label">Location</InputLabel>
                            <Controller
                                name="location"
                                control={control}
                               
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        labelId="type-select-label"
                                        id="type-select"
                                        label="location"
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)}
                                    >
                                  <MenuItem value=""><em>None</em></MenuItem>
                                        {
                                              
                                              locations.map((location)=>(
                                                <MenuItem key={location._id} value={location._id}>{location.name} </MenuItem>
                                            ))
                                        }
                                       
                                    </Select>
                                )}
                                rules={{ required: "Location is required" }}
                            />
                            {errors.location && (
                                <FormHelperText>{errors.location.message}</FormHelperText>
                            )}
                        </FormControl>


                        <FormControl >
                        <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={isTrailerAllowed} onChange={()=>setIsTrailerAllowed(!isTrailerAllowed)} />
              }
              label="Is TrailerAllowed"
            />
             </FormControl>


                   
                        <Button variant='contained' type='submit' sx={{ width: '150px' }}>Add</Button>
                    </Stack>
                </Container>
            </form>
        </StyledDialog>
    )
}
