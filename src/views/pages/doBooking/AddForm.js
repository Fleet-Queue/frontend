import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { MuiFileInput } from 'mui-file-input'
import { AttachFile } from '@mui/icons-material';
import { toast } from 'react-toastify';
import StyledDialog from 'ui-component/StyledDialog';

export default function AddForm({ getBookings, open, onClose, isEdit = false, data={} }) {
    const [file, selectFile] = useState(isEdit && data["Image"])
    console.log(isEdit && data["Image"]);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: isEdit ? data["Ads Name"] : ''
    })

    const onSubmit = (data) => {
    
        createAds({ "adName": data.AdsName, "imageURL": url })
        .then((response) => {
          console.log(response);
          onClose();
          getBookings()
        }) .catch((error) => {
                console.error(error);
                toast.error(error);
               
              });
          
        
    }
        
    return (
        
        <StyledDialog open={open} onClose={()=>{
            setEditImg()
            selectFile()
            onClose()
        }}  title={`${isEdit ? "Edit" : "Add"} Truck`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Stack direction={'column'} sx={{ p: 2 }} spacing={1}>
                        <Typography variant='h5'>Select Image </Typography>
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
                        />
                        <Typography variant='h5'>Ads Name</Typography>
                        <Controller
                            name="AdsName"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <TextField {...field} placeholder="Enter Advertisement Name" />
                                    {errors.AdName && (
                                        <span style={{ color: '#f00' }}>
                                            {errors.AdName.message}
                                        </span>
                                    )}
                                </>
                            )}
                            rules={{ required: "Ads Name is required" }}
                        />
                        <Button variant='contained' type='submit' sx={{ width: '150px' }}>Add</Button>
                    </Stack>
                </Container>
            </form>
        </StyledDialog>
    )
}
