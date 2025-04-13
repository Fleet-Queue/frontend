import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
import AddBookingForm from './AddBookingForm';
// import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { toast } from 'react-toastify';
import { cancelDo, deleteDeliveryOrder } from 'utils/Service';
import {
  ref,
  deleteObject // Import deleteObject from Firebase
} from "firebase/storage";
import storage from "../../../utils/firebase-config"
import CancelDialog from './cancelDO';
import AddForm from './AddForm';

const tableHeader = ['DO No.','name', 'view DO','avaiable from','upload date','type','location',"status"];

export default function Content({ partyId,data, updateData }) {
  const [formOpen, setFormOpen] = useState(false);
  const [updFormOpen, setUpdFormOpen] = useState(false);
  const [selectedData, setselectedData] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formHead,setFormHead] = useState("cancel");
  const [updData, setUpdData] = useState({});
  const [upd, setUpd] = useState(false);
  // const navigate = useNavigate()
  const tableData = tableHeaderReplace(data, [ 'doNumber', 'name', 'link','availableFrom','uploadDate','type','location',"status" ], tableHeader);
  const admin = localStorage.getItem('role') === 'admin' ;

  const handleCancelClick = (itemId, itemName) => {
    setSelectedItem({ id: itemId, name: itemName });
    setDialogOpen(true);
  };


  const updateDO = (data) =>{
    console.log(data[0])
    setUpdData(data[0])
      setUpd(true)
      setUpdFormOpen(true)
  }
  const handleClose = () => {
    setDialogOpen(false);
    setSelectedItem(null); // Reset selected item
  };

  const handleConfirmCancel = (itemId,cancelReason) => {
    
    console.log(`Cancelled item with ID: ${itemId} for reason: ${cancelReason}`);
    cancelDo(itemId, { cancelReason})
    .then(() => {
      
      toast.success(`Successfully cancelled `);
      updateData(partyId); 
    })
    .catch((error) => {
      console.log(error)
      toast.error(error.response?.data?.message || "Failed to cancel the item");
    });
  };

  const actionHandle = (e) => {
    console.log(e);
    if (e.action == 'delete') {
      console.log(e.data._id);
      handleDelete(e.data.uniqueName)
      setselectedData(e.data);
      deleteDeliveryOrder( e.data._id )
        .then((
         
        ) => {
          toast.success("Do deleted Successfully")
          updateData(partyId);
        })
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
    }else if (e.action == 'update'){
      console.log("hey")
      updateDO(data)
    }else if(e.action == 'cancel' || e.action == "reject"){
      setFormHead(e.action)
      console.log("cancel")
      handleCancelClick(e.data._id,e.data.fileName)
    } else {
      setselectedData();
    }
    
  };
  


  
  const handleDelete = async (fileName) => {
    if (fileName) {
      const storageRef = ref(storage, `/DoBookings/${fileName}`);
      try {
        await deleteObject(storageRef);
        toast.success("File deleted successfully");
       
      } catch (error) {
        console.error("Failed to delete file:", error);
        toast.error("Failed to delete file");
      }
    } else {
      toast.error("File not found:", fileName);
    }
  };
  return (
    <>


{   
      <AddForm data={updData} open={updFormOpen} upd={upd}  onClose={
        () =>{
        
          setUpdFormOpen(false)
          updateData(partyId)
      }
      } />    
  }

    {
     
        <AddBookingForm
        open={formOpen}
        onClose={() => {
        
          setFormOpen(false);
          updateData(partyId)
        }}
        isEdit={true}
        getBookings={updateData}
        doData={selectedData}
        data={selectedData?.companyId} 
        doId={selectedData?._id}
      />
      
    }



    {selectedItem && (
        <CancelDialog
          open={dialogOpen}
          handleClose={handleClose}
          itemId={selectedItem.id}
          itemName={selectedItem.name}
          onConfirm={handleConfirmCancel}
          formHeading = {formHead}
        />
      )}
     

      
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={true}
        actions={admin ? ['addBooking','reject'] : ['update','delete','cancel']}
        onActionChange={actionHandle}
      />
    </>
  );
}
