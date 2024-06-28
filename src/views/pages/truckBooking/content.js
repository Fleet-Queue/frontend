import React from 'react';
import StyledTable from './StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
// import { useState } from 'react';
import { toast } from 'react-toastify';

const tableHeader = ['name', 'RegNo', 'category','truckType', 'availableFrom'];

export default function Content({ data, updateStatus,  updateData }) {

 
  const tableData = tableHeaderReplace(data, ['name', 'registrationNumber', 'category', 'truckType','availableFrom' ], tableHeader);

  const actionHandle = (e) => {
    console.log(e);
    if (e.action == 'cancel') {
      console.log(e.data._id);
      
      updateStatus( {TruckBookingId:e.data._id, status:"cancelled", cancelReason:"cancelled By Transporter" })
        .then((res) => {
          console.log(res.message)
          toast.success(res.message)
          updateData({status:"inqueue"});
        })
        .catch((error) => {
          console.error(error);
          toast.error("Error occured while updating");
        });
    } 
   
  
  };

  return (
    <>
      
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={true}
        actions={['cancel']}
        onActionChange={actionHandle}
      />
    </>
  );
}
