import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
import PartyAddForm from './PartyAddForm';
import { useState } from 'react';
import { toast } from 'react-toastify';

const tableHeader = ['name', 'address',  'contactPerson','contactNumber' ];

export default function Content({ data, deleteAd, updateData, navigation }) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedData, setselectedData] = useState();
  const tableData = tableHeaderReplace(data, ['name', 'address', 'contactPerson','contactNumber' ], tableHeader);

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
    updateData();
  };

  return (
    <>
      <PartyAddForm
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
        }}
        data={selectedData}
        isEdit={true}
      />
      <StyledTable
      onClickAction={navigation}
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
