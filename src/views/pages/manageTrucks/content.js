import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
import TruckAdForm from './TruckAdForm';
import { TextField, Box, Grid } from '@mui/material'; // Add Grid to imports

import AddTruckBookingForm from './AddTruckBookingForm';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {deleteTruck} from '../../../utils/Service'
const tableHeader = ['name', 'RegNo', 'category','truckType','company'];

export default function Content({ data, updateData,addTruckBooking }) {
  const [formOpen, setFormOpen] = useState(false);
  const [truckBookingOpen, setTruckBookingOpen] = useState(false);
  const [selectedData, setselectedData] = useState();
  const [searchReg, setSearchReg] = useState('');
  const [searchCompany, setSearchCompany] = useState('');



  const filteredData = data.filter((item) => {
    const regMatch = item.registrationNumber.toLowerCase().includes(searchReg.toLowerCase());
    const companyMatch = item.companyName.toLowerCase().includes(searchCompany.toLowerCase());
    return regMatch && companyMatch;
  });


  const tableData = tableHeaderReplace(
    filteredData, 
    ['name', 'registrationNumber', 'category', 'truckType', 'companyName'], 
    tableHeader
  );
  
  const admin = localStorage.getItem('role') === 'admin' ;

  const actionHandle = async (e) => {
    console.log(e);
    if (e.action == 'delete') {
      console.log(e.data._id);
      setselectedData(e.data);
      deleteTruck( e.data._id )
        .then(() => {
          updateData();
        })
        .catch((error) => {
          console.error(error);
          toast.error(error.response.data.message);
        });
    }else if(e.action == 'Add To Queue'){
      setselectedData(e.data);
      setTruckBookingOpen(true)
      console.log("add to booking")
      console.log(e.data._id);
      // updateData();
    } else if(e.action == 'Edit'){
          console.log("Edit")
          setFormOpen(true);
          setselectedData(e.data)
    } else{
      setselectedData();
    }
     
  };

  return (
    <>


<Box sx={{ mb: 2 }}>
  <Grid container spacing={2}>
    <Grid item xs={6} md={4}>
      <TextField
        label="Search Registration Number"
        variant="outlined"
        size="small"
        fullWidth
        value={searchReg}
        onChange={(e) => setSearchReg(e.target.value)}
      />
    </Grid>
    {admin && (
      <Grid item xs={6} md={4}>
        <TextField
          label="Search Company"
          variant="outlined"
          size="small"
          fullWidth
          value={searchCompany}
          onChange={(e) => setSearchCompany(e.target.value)}
        />
      </Grid>
    )}
  </Grid>
</Box>

    {
      formOpen &&
      <TruckAdForm
      getTrucks={updateData}
      open={formOpen}
      onClose={() => {
        updateData()
        setFormOpen(false);
      }}
      data={selectedData}
      isEdit={true}
    />
    }
     
      <AddTruckBookingForm
       open={truckBookingOpen}
       onClose={() => {
        setTruckBookingOpen(false);
       }}
       submit={addTruckBooking}
      data={selectedData}
     //  isEdit={true}
      />
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={true}
        actions={admin?['Add To Queue','Edit','delete']:['Add To Queue','Edit']}
        onActionChange={actionHandle}
      />
    </>
  );
}
