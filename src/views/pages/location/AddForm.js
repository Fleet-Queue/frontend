import { Button, Container, MenuItem, Select, Stack, TextField, Typography,  FormControl, InputLabel, FormHelperText, FormControlLabel, Switch } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";

import { toast } from 'react-toastify';
import StyledDialog from 'ui-component/StyledDialog';


export default function AddForm({ getLocation,addLocation, open, onClose, isEdit = false, data={} }) {

    const [isHighRange, setHighRange] = React.useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: isEdit ? data["Name"] : ''
    })

    const onSubmit = (data) => {
    console.log(data)
    addLocation({ name:data.name,
            kilometer:data.kilometer,
            tripType:data.tripType,
            isHighRangeArea:isHighRange,
          })
        .then((response) => {
          console.log(response);
          toast.success("Location Added Successfully");
          getLocation()
          onClose();
        }) .catch((error) => {
                console.error(error);
                toast.error(error.response.data.message);
               
              });
          
        
    }


  
       
    


     useEffect(() => {
      
     }, [])
     
        
    return (
        
        <StyledDialog open={open} fullWidth onClose={()=>{
    
            onClose()
        }}  title={`${isEdit ? "Edit" : "Add"} Truck`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Stack direction={'column'} sx={{ p: 2 }} spacing={1}>
                      
                        <Typography variant='h5'>Location Name</Typography>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Enter Location Name" />
                                    {errors.name && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.name.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "Location Name is required" }}
                        />

<Typography variant='h5'>Kilometer</Typography>
                        <Controller
                            name="kilometer"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Enter Kilometer from terminal" />
                                    {errors.kilometer && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.kilometer.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "kilometer is required" }}
                        />

<Typography variant='h5'>Trip Type</Typography>
<FormControl  error={Boolean(errors.tripType)}>
                            <InputLabel  id="type-select-label">Trip Type</InputLabel>
                            <Controller
                                name="tripType"
                                control={control}
                               
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        labelId="type-select-label"
                                        id="type-select"
                                        label="triptype"
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)}
                                    >
                                  <MenuItem value=""><em>None</em></MenuItem>
                                   nationalPermit long medium local
                                                <MenuItem key={'local'} value={'local'}>local </MenuItem>
                                                <MenuItem key={'medium'} value={'medium'}>medium </MenuItem>
                                                <MenuItem key={'long'} value={'long'}>long </MenuItem>
                                                <MenuItem key={'nationalPermit'} value={'nationalPermit'}>nationalPermit </MenuItem>
                                    </Select>
                                )}
                                rules={{ required: "Trip Type is required" }}
                            />
                            {errors.triptype && (
                                <FormHelperText>{errors.triptype.message}</FormHelperText>
                            )}
                        </FormControl>

                        <FormControl >
                        <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={isHighRange} onChange={()=>setHighRange(!isHighRange)} />
              }
              label="Is HighRange"
            />
             </FormControl>
                        <Button variant='contained' type='submit' sx={{ width: '150px' }}>Add</Button>
                    </Stack>
                </Container>
            </form>
        </StyledDialog>
    )
}
