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
import { CancelAllocatedBooking, getAllocationDetails, ReAllocateBooking } from 'utils/Service';
import CancelDialog from '../doUpload/cancelDO';
import { utils as XLSXUtils, write as XLSXWrite } from 'xlsx';
import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import dayjs from 'dayjs';
// ...existing imports...

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






const handleExport = () => {
  const exportData = []; // Array to hold final data for export

  // Function to fetch allocation details and process export data
  const fetchAllocationDetails = async (item) => {
    try {
      const allocationDetails = await getAllocationDetails({ doBookingId: item._id });
      // Map and merge the allocation details into the export data
      const exportItem = {
        'Sl No': exportData.length + 1,
        'Registration Number': allocationDetails.truckBookingId?.truck?.registrationNumber || 'N/A',
        'Company': item.deliveryOrderId?.companyId?.name || 'N/A',
        'Company Phone ': item.deliveryOrderId?.companyId?.contactNumber?.toString() || 'N/A',
        'DO Number': item.deliveryOrderId?.doNumber || '',
        'Location' : item.deliveryOrderId?.location || 'N/A',
        'Truck Type': `${item.truckType} FT`,
        'Status': item.status,
        'Allocation Date': dayjs(item.updatedAt).format('DD/MM/YYYY HH:mm'),
        'Truck Company': allocationDetails?.truckBookingId?.truck?.companyId?.name || 'N/A',
      };

      // Push the merged data into exportData array
      exportData.push(exportItem);

      // If all data is processed, generate the Excel file
      if (exportData.length === data.length) {
        const workbook = XLSXUtils.book_new();
        const worksheet = XLSXUtils.json_to_sheet(exportData);
        XLSXUtils.book_append_sheet(workbook, worksheet, 'Bookings');

        const excelBuffer = XLSXWrite(workbook, { bookType: 'xlsx', type: 'array' });
        const date = selectedDate.format('DD-MM-YYYY');
        const fileName = `Allocated_Bookings_${date}.xlsx`;

        // Create download link
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || 'Failed to fetch allocation details');
    }
  };

  // Loop through all data and fetch allocation details for each item
  data.forEach((item) => {
    fetchAllocationDetails(item);
  });
};


  return (
    <>

<Box sx={{ mb: 2 }}>
        <Grid container spacing={2} alignItems="center">
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
          <Grid item xs={12} md={6}>
            <Button 
              variant="contained" 
              startIcon={<FileDownloadIcon />}
              onClick={handleExport}
              sx={{ float: 'right' }}
            >
              Export to Excel
            </Button>
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
