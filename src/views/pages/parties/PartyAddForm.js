import { Button, Container, MenuItem, Select, Stack, TextField, Typography, FormControl, InputLabel, FormHelperText, FormControlLabel, Switch } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { toast } from 'react-toastify';
import StyledDialog from 'ui-component/StyledDialog';
import { addParty, updateParty, getAllLocation } from 'utils/Service'; 

export default function PartyAddForm({ getParty, open, onClose, isEdit = false, data = {} }) {
    const [locations, setLocations] = useState([]);
    const [isTrailerAllowed, setIsTrailerAllowed] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            address: '',
            contactPerson: '',
            contactNumber: '',
            location: '',
        },
    });
    

    const onSubmit = (formData) => {
        const payload = {
            ...formData,
            isTrailerAllowed,
        };

        if (isEdit) {
            console.log(payload)

        console.log(data._id)
            updateParty(data._id,{ name:formData.name,
                address:formData.address,
                locationId:formData.location,
                contactPerson:formData.contactPerson,
                contactNumber:formData.contactNumber,
                isTrailerAllowed
            })
                 .then(() => {
                    toast.success("Party updated successfully");
                    getParty(); 
                    onClose();
                 })
                .catch((error) => {
                     toast.error(error.response?.data?.message || "Operation failed");
                 });
        } else {
            // Call the add API if in add mode
            addParty({ name:formData.name,
                address:formData.address,
                locationId:formData.location,
                contactPerson:formData.contactPerson,
                contactNumber:formData.contactNumber,
                isTrailerAllowed
            })
                .then(() => {
                    toast.success("Party added successfully");
                    getParty(); // Refresh the list
                    onClose();
                })
                .catch((error) => {
                    toast.error(error.response?.data?.message || "Operation failed");
                });
        }
    };

    useEffect(() => {
        // Fetch locations on mount
        getAllLocation()
            .then(data => setLocations(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (isEdit && data) {
            setIsTrailerAllowed(data?.isTrailerAllowed || false);
            reset({
                name: data.name || '',
                address: data.address || '',
                contactPerson: data.contactPerson || '',
                contactNumber: data.contactNumber || '',
                location: data.locationId || '',
            });
        } 
        // else {
        //     reset(); // Use reset without any parameters for add mode
        // }
    }, [data, isEdit, reset]);
    

    return (
        <StyledDialog open={open} fullWidth onClose={onClose} title={`${isEdit ? "Edit" : "Add"} Party`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Stack direction={'column'} spacing={2}>
                        <Typography variant='h5'>Party Name</Typography>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: "Party Name is required" }}
                            render={({ field }) => <TextField {...field} placeholder="Enter Party Name" />}
                        />
                        {errors.name && <FormHelperText error>{errors.name.message}</FormHelperText>}

                        <Typography variant='h5'>Address</Typography>
                        <Controller
                            name="address"
                            control={control}
                            rules={{ required: "Address is required" }}
                            render={({ field }) => <TextField {...field} placeholder="Enter Party Address" />}
                        />
                        {errors.address && <FormHelperText error>{errors.address.message}</FormHelperText>}

                        <Typography variant='h5'>Contact Person Name</Typography>
                        <Controller
                            name="contactPerson"
                            control={control}
                            rules={{ required: "Contact Person is required" }}
                            render={({ field }) => <TextField {...field} placeholder="Enter Contact Person Name" />}
                        />
                        {errors.contactPerson && <FormHelperText error>{errors.contactPerson.message}</FormHelperText>}

                        <Typography variant='h5'>Contact Number</Typography>
                        <Controller
                            name="contactNumber"
                            control={control}
                            rules={{ required: "Contact Number is required" }}
                            render={({ field }) => <TextField {...field} placeholder="Enter Contact Number" />}
                        />
                        {errors.contactNumber && <FormHelperText error>{errors.contactNumber.message}</FormHelperText>}

                        <FormControl>
    <InputLabel>Location</InputLabel>
    <Controller
        name="location"
        control={control}
        rules={{ required: "Location is required" }}
        render={({ field }) => (
            <Select {...field}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {locations.map((location) => (
                    <MenuItem key={location._id} value={location._id}>
                        {location.name}
                    </MenuItem>
                ))}
            </Select>
        )}
    />
    {errors.location && <FormHelperText error>{errors.location.message}</FormHelperText>}
</FormControl>


                        <FormControl>
                            <FormControlLabel
                                control={<Switch checked={isTrailerAllowed} onChange={() => setIsTrailerAllowed(!isTrailerAllowed)} />}
                                label="Is Trailer Allowed"
                            />
                        </FormControl>

                        <Button variant='contained' type='submit'>
                            {isEdit ? "Update" : "Add"}
                        </Button>
                    </Stack>
                </Container>
            </form>
        </StyledDialog>
    );
}
