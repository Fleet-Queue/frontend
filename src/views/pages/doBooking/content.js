import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
// import AddForm from './AddForm';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { CancelAllocatedBooking, ReAllocateBooking } from 'utils/Service';
import CancelDialog from '../doUpload/cancelDO';

const tableHeader = ['name', 'View DO','availableFrom',"status","allocation"];

export default function Content({ partyId,data, updateData ,selectedDate, setSelectedDate }) {
   const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const tableData = tableHeaderReplace(data, [ 'truckType', 'link','availableFrom',"status" ], tableHeader);






  const handleClose = () => {
    setDialogOpen(false);
    setSelectedData(null); // Reset selected item
  };

  const handleConfirmCancel = (itemId,cancelReason) => {
    
    console.log(`Cancelled item with ID: ${itemId} for reason: ${cancelReason}`);
    CancelAllocatedBooking(itemId, { cancelReason})
    .then(() => {
      
      toast.success(`Successfully cancelled `);
      refreshData(); 
    })
    .catch((error) => {
      console.log(error)
      toast.error(error.response?.data?.message || "Failed to cancel the item");
    });
  };

  const refreshData = ()=>{
    updateData(partyId, selectedDate.format('DD/MM/YYYY'))
  }
  const actionHandle = (e) => {
    console.log(e);
    if (e.action == 'cancel') {
      console.log(e.data._id);
      setSelectedData(e.data);
      setDialogOpen(true);
      // deleteDo( e.data._id )
      //   .then(() => {})
      //   .catch((error) => {
      //     console.error(error);
      //     toast.error(error.response.data.message);
      //   });
    }else if(e.action == "re-allocate"){
      ReAllocateBooking(e.data._id).then(()=>{
        toast.success(`Successfully cancelled `);
        refreshData(); 
      }).catch((error)=>{
        toast.error(error.response?.data?.message || "Failed to reallocate the item");
      })
    } else {


      setSelectedData();
    }
   
    updateData(partyId);
  };
console.log(selectedData)
  return (
    <>
    <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                slotProps={{ textField: { size: 'small', fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>

     
     {selectedData && (
        <CancelDialog
          open={dialogOpen}
          handleClose={handleClose}
          itemId={selectedData._id}
          itemName={selectedData.deliveryOrderId.doNumber}
          onConfirm={handleConfirmCancel}
          formHeading = {"cancel"}
        />
      )}
     

      
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={true}
        actions={['cancel','re-allocate']}
        onActionChange={actionHandle}
        refreshData={refreshData}
      />
    </>
  );
}
