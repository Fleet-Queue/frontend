import { Button, Container, MenuItem, Select, Stack, TextField, Typography,  FormControl, InputLabel, FormHelperText } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";

import { toast } from 'react-toastify';
import StyledDialog from 'ui-component/StyledDialog';
import { addTruck, getCompanyDrivers } from 'utils/Service';

export default function TruckAdForm({ getTrucks, open, onClose, isEdit = false, data={} }) {
    const [drivers, setDrivers] =useState([]);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: isEdit ? data["Name"] : ''
    })

    const onSubmit = (data) => {
    console.log(data)
        addTruck({ name:data.name,
            registrationNumber:data.registrationNumber,
            driverId:data.driver,
            category:data.category,
            truckType:data.type})
        .then((response) => {
          console.log(response);
          getTrucks()
          onClose();
        }) .catch((error) => {
                console.error(error);
                toast.error(error);
               
              });
          
        
    }


  
       
    


     useEffect(() => {
        getCompanyDrivers().then((data)=>{
            console.log(data)
            setDrivers(data)
             }).catch((error) => {
          console.log(error)
             })
     }, [])
     
        
    return (
        
        <StyledDialog open={open} fullWidth onClose={()=>{
    
            onClose()
        }}  title={`${isEdit ? "Edit" : "Add"} Truck`}>
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
                        <Typography variant='h5'>Truck Name</Typography>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Enter Truck Name" />
                                    {errors.name && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.name.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "Truck Name is required" }}
                        />

<Typography variant='h5'>Reg Number</Typography>
                        <Controller
                            name="registrationNumber"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Eg: KL40 A 1234" />
                                    {errors.registrationNumber && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.registrationNumber.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "Reg No is required" }}
                        />


<FormControl error={Boolean(errors.driver)}>
                            <InputLabel id="type-select-label">Driver</InputLabel>
                            <Controller
                                name="driver"
                                control={control}
                               
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        labelId="type-select-label"
                                        id="type-select"
                                        label="driver"
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)}
                                    >
                                  <MenuItem value=""><em>None</em></MenuItem>
                                        {
                                              
                                            drivers.map((driver)=>(
                                                <MenuItem key={driver._id} value={driver._id}>{driver.name} Mob: {driver.contactNumber} Type: {driver.licenceType} </MenuItem>
                                            ))
                                        }
                                       
                                    </Select>
                                )}
                                rules={{ required: "Driver is required" }}
                            />
                            {errors.driver && (
                                <FormHelperText>{errors.driver.message}</FormHelperText>
                            )}
                        </FormControl>


<FormControl error={Boolean(errors.category)}>
                            <InputLabel id="type-select-label">Category</InputLabel>
                            <Controller
                                name="category"
                                control={control}
                                defaultValue={"MULTIAXIL"} // Default value set to 20
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        labelId="type-select-label"
                                        id="type-select"
                                        label="category"
                                        onChange={(e) => field.onChange(e.target.value)}
                                    >
                                        <MenuItem value={"MULTIAXIL"}>MULTIAXIL</MenuItem>
                                        <MenuItem value={"Trailer"}>Trailer</MenuItem>
                                        <MenuItem value={"DA"}>DA</MenuItem>
                                    </Select>
                                )}
                                rules={{ required: "Category is required" }}
                            />
                            {errors.category && (
                                <FormHelperText>{errors.category.message}</FormHelperText>
                            )}
                        </FormControl>


<FormControl error={Boolean(errors.type)}>
                            <InputLabel id="type-select-label">Type</InputLabel>
                            <Controller
                                name="type"
                                control={control}
                                defaultValue={20} // Default value set to 20
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
                        <Button variant='contained' type='submit' sx={{ width: '150px' }}>Add</Button>
                    </Stack>
                </Container>
            </form>
        </StyledDialog>
    )
}
