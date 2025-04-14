import React from 'react';
import StyledTable from './StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
// import { useState } from 'react';
import { toast } from 'react-toastify';

const tableHeader = ['RegNo', 'party', 'location','contact','rate', 'Date','status'];

export default function Content({ data, updateStatus,  updateData }) {

  // const [selectedData, setselectedData] = useState();
  const tableData = tableHeaderReplace(data, [ 'registrationNumber','party','location','contact','rate','Date','status' ], tableHeader);

  const actionHandle = (e) => {
    console.log(e);
    if (e.action == 'cancel') {
      console.log(e.data._id);
      
      updateStatus( {truckId: e.data._id, status:"inqueue" })
        .then((res) => {
          console.log(res.message)
          toast.success(res.message)
          updateData({status:"allocated"});
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
        refresh = {updateData}
        onActionChange={actionHandle}
      />
    </>
  );
}
