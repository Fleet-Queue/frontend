import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
import AddBookingForm from './AddBookingForm';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { toast } from 'react-toastify';
import { deleteDeliveryOrder } from 'utils/Service';

const tableHeader = ['name', 'View DO','uploadDate',"status"];

export default function Content({ partyId,data, updateData }) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedData, setselectedData] = useState({});
  const navigate = useNavigate()
  const tableData = tableHeaderReplace(data, [ 'name', 'link','uploadDate',"status" ], tableHeader);
  const admin = localStorage.getItem('role') === 'admin' ;





  const actionHandle = (e) => {
    console.log(e);
    if (e.action == 'delete') {
      console.log(e.data._id);
      setselectedData(e.data);
      deleteDeliveryOrder( e.data._id )
        .then(() => {})
        .catch((error) => {
          console.error(error);
          toast.error(error.response.data.message);
        });
    }else if(e.action == 'addBooking'){
      setselectedData(e.data);
      console.log(e.data);
      setFormOpen(true)
      console.log("add to booking")
      console.log(e.data._id);
      // updateData();
    } else {
      setselectedData();
    }
    updateData(partyId);
  };

  return (
    <>
    {
     
        <AddBookingForm
        open={formOpen}
        onClose={() => {
        
          setFormOpen(false);
          updateData(partyId)
          navigate('/doBooking')
        }}
        isEdit={true}
        getBookings={updateData}
        data={selectedData?.companyId} 
        doId={selectedData?._id}
      />
      
    }
     

      
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={false}
        actions={admin ? ['addBooking', 'delete'] : ['delete']}
        onActionChange={actionHandle}
      />
    </>
  );
}
