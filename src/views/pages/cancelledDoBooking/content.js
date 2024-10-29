import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
// import AddForm from './AddForm';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { deleteDo } from 'utils/Service';

const tableHeader = ['DO number','truckType', 'rate','availableFrom',"status","reason",'View DO'];

export default function Content({ partyId,data, updateData }) {
  // const [formOpen, setFormOpen] = useState(false);
  const [selectedData, setselectedData] = useState();
  const tableData = tableHeaderReplace(data, [ 'doNumber', 'truckType', 'rate','availableFrom',"status","reason" ], tableHeader);

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
   
     

      
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={false}
        actions={['']}
        onActionChange={actionHandle}
        refreshData={refreshData}
      />
    </>
  );
}
