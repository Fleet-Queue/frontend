import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
// import AddForm from './AddForm';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { deleteDo } from 'utils/Service';

const tableHeader = ['name', 'View DO','availableFrom',"status","allocation"];

export default function Content({ partyId,data, updateData }) {
  // const [formOpen, setFormOpen] = useState(false);
  const [selectedData, setselectedData] = useState();
  const tableData = tableHeaderReplace(data, [ 'truckType', 'link','availableFrom',"status" ], tableHeader);

  const refreshData = ()=>{
    updateData()
  }
  const actionHandle = (e) => {
    console.log(e);
    if (e.action == 'delete') {
      console.log(e.data._id);
      setselectedData(e.data);
      deleteDo( e.data._id )
        .then(() => {})
        .catch((error) => {
          console.error(error);
          toast.error(error.response.data.message);
        });
    } else {
      setselectedData();
    }
   
    updateData(partyId);
  };
console.log(selectedData)
  return (
    <>
    {/* {
      partyId&&
      (
        <AddForm
        open={formOpen}
        onClose={() => {

          setFormOpen(false);
          updateData(partyId)
        }}
        isEdit={true}
        getBookings={updateData}
        data={partyId} 
      />
      )
    } */}
     

      
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={true}
        actions={['delete']}
        onActionChange={actionHandle}
        refreshData={refreshData}
      />
    </>
  );
}
