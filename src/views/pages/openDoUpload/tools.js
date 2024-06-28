import { Add } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import MainCard from 'ui-component/cards/MainCard'

export default function Tools({buttonClick}) {

    const forwarder = localStorage.getItem('role') === 'both' || localStorage.getItem('role') === 'forwarder';


    return (
        <MainCard>
            
            <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h3' color={'secondary.main'}>DO Uploads</Typography>
                 {
                   
                   forwarder && (
                       <Button variant='contained' startIcon={<Add />} sx={{ backgroundColor: 'secondary.main' }} onClick={buttonClick}>Add DO</Button>
                    )
                    
                }
            </Stack>
        </MainCard>
    )
}
