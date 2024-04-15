import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
import TruckAdForm from './TruckAdForm';
import { useState } from 'react';
import { toast } from 'react-toastify';

const tableHeader = ['name', 'RegNo', 'category','truckType', 'status'];

export default function Content({ data, deleteAd, updateData }) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedData, setselectedData] = useState();
  const tableData = tableHeaderReplace(data, ['name', 'registrationNumber', 'category', 'truckType','status' ], tableHeader);

  const actionHandle = (e) => {
    console.log(e);
    if (e.action == 'delete') {
      console.log(e.data._id);
      setselectedData(e.data);
      deleteAd( e.data._id )
        .then(() => {})
        .catch((error) => {
          console.error(error);
          toast.error(error.response.data.message);
        });
    } else {
      setselectedData();
    }
    console.log("hehehheh updating88888888888888888888888888888888888888888888")
    updateData();
  };

  return (
    <>
      <TruckAdForm
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
        }}
        data={selectedData}
        isEdit={true}
      />
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={true}
        actions={['delete','Edit','UpdateStatus']}
        onActionChange={actionHandle}
      />
    </>
  );
}
