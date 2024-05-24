import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
import TruckAdForm from './TruckAdForm';
import AddTruckBookingForm from './AddTruckBookingForm';
import { useState } from 'react';
import { toast } from 'react-toastify';

const tableHeader = ['name', 'RegNo', 'category','truckType'];

export default function Content({ data, updateData,addTruckBooking }) {
  const [formOpen, setFormOpen] = useState(false);
  const [truckBookingOpen, setTruckBookingOpen] = useState(false);
  const [selectedData, setselectedData] = useState();
  const tableData = tableHeaderReplace(data, ['name', 'registrationNumber', 'category', 'truckType' ], tableHeader);




  const actionHandle = async (e) => {
    console.log(e);
    if (e.action == 'delete') {
      console.log(e.data._id);
      setselectedData(e.data);
      deleteAd( e.data._id )
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
    } else {
      setselectedData();
    }
    console.log("hehehheh updating88888888888888888888888888888888888888888888")
     
  };

  return (
    <>
      <TruckAdForm
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
        }}
        data={selectedData}
        isEdit={false}
      />
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
        actions={['Add To Queue','Edit','delete']}
        onActionChange={actionHandle}
      />
    </>
  );
}
