import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Grid, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Typography 
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import StyledTable from 'ui-component/StyledTable';
import { 
    // getMatchingInqueueTrucks, use this for fetch truck available between dates
    getTruckQueue
 } from 'utils/Service';
 import { utils as XLSXUtils, write as XLSXWrite } from 'xlsx';
 import { Button } from '@mui/material';
 import FileDownloadIcon from '@mui/icons-material/FileDownload';

const tableHeader = [
    'Sl No',
    'Truck Name',
    'Registration Number',
    'Company',
    'Contact',
    'Type',
    'Category'
  ];
export default function QueueList() {


  const [truckType, setTruckType] = useState(20);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [queueData, setQueueData] = useState([]);

  const fetchQueueData = () => {
    const data = {
      type: truckType,
      date: selectedDate.format('DD/MM/YYYY')
    };

    getTruckQueue(data)
      .then((res) => {
        console.log(res)
        setQueueData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchQueueData();
  }, [truckType, selectedDate]);

const tableData = queueData.map((item, index) => {
    console.log('Mapping item:', item); // Debug log
    return {
      'Sl No': index + 1,
      'Truck Name': item.truck.name,
      'Registration Number': item.truck.registrationNumber,
      'Company': item.truck.companyId.name,
      'Contact': item.truck.companyId.contactNumber,
      'Type': `${item.truck.truckType} FT`,
      'Category': item.truck.category
    };
  });





  const handleExport = () => {
    // Transform data for Excel
    const excelData = queueData.map((item, index) => ({
      'Sl No': index + 1,
      'Registration Number': item.truck.registrationNumber,
      'Type': `${item.truck.truckType} FT`,
      'Queue Added Date': dayjs(item.createdAt).format('DD/MM/YYYY HH:mm')
    }));

    // Create workbook and worksheet
    const workbook = XLSXUtils.book_new();
    const worksheet = XLSXUtils.json_to_sheet(excelData);

    // Add worksheet to workbook
    XLSXUtils.book_append_sheet(workbook, worksheet, `${truckType}FT Trucks`);

    // Generate Excel file
    const excelBuffer = XLSXWrite(workbook, { bookType: 'xlsx', type: 'array' });
    const date = selectedDate.format('DD-MM-YYYY');
    const fileName = `Truck_Queue_${truckType}FT_${date}.xlsx`;

    // Create download link
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          {/* ...existing Grid items for truck type and date... */}
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              startIcon={<FileDownloadIcon />}
              onClick={handleExport}
              sx={{ float: 'right', mb: 2 }}
            >
              Export to Excel
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Truck Type</InputLabel>
              <Select
                value={truckType}
                label="Truck Type"
                onChange={(e) => setTruckType(e.target.value)}
              >
                <MenuItem value={20}>20 FT</MenuItem>
                <MenuItem value={40}>40 FT</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                disabled
                slotProps={{ textField: { size: 'small', fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>

      {queueData.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Typography>No Trucks in Queue for selected criteria</Typography>
        </Box>
      ) : (
        <StyledTable
          data={tableData}
          header={tableHeader}
          isShowSerialNo={false}
          isShowAction={false}
        />
      )}
    </>
  );
}