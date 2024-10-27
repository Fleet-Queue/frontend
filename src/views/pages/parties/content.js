import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
import PartyAddForm from './PartyAddForm';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { deleteParty, updatePartyStatus } from 'utils/Service';
import DeleteConfirmDialog from 'ui-component/dialogs/DeleteConfirmDialog';

const tableHeader = ['name', 'address', 'contact person', 'contact number','status'];

export default function Content({ data,  updateData, navigation }) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const tableData = tableHeaderReplace(data, ['name', 'address', 'contactPerson', 'contactNumber','status'], tableHeader);
  const admin = localStorage.getItem('role') === 'admin';



  const handleDeleteConfirm = () => {
    console.log("Item deleted");
    deleteParty(selectedData._id)
    .then(() => {
      toast.success("Party deleted successfully");
      updateData();
    })
    .catch((error) => {
      console.log(error)
      toast.error(error.response?.data?.message || "Failed to delete");
    });
    setOpenDeleteDialog(false);
};

  const actionHandle = (e) => {
    if (e.action === 'delete') {
      console.log(e)
      setSelectedData(e.data);
      setOpenDeleteDialog(true)
      console.log(e.data._id)
     
    } else if (e.action === 'Edit') {
      setSelectedData(e.data);
      setIsEditMode(true);
      setFormOpen(true);
    } else if (e.action === 'UpdateStatus') {
      updatePartyStatus(e.data._id)
        .then(() => {
          toast.success("Party status updated successfully");
          updateData();
        })
        .catch((error) => {
          console.log(error)
          toast.error(error.response?.data?.message || "Failed to update status");
        });
    }
  };

  return (
    <>
      <PartyAddForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        data={selectedData}
        isEdit={isEditMode} 
        getParty={updateData} 
      />

      <DeleteConfirmDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleDeleteConfirm}
      />

      <StyledTable
        onClickAction={admin && navigation}
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={!admin}
        actions={['delete', 'Edit', 'UpdateStatus']}
        onActionChange={actionHandle}
      />
    </>
  );
}
