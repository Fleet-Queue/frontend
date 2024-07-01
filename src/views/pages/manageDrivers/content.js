import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';

import { useState } from 'react';
import { toast } from 'react-toastify';
import {deleteDriver} from '../../../utils/Service'
import DriverAdForm from './AdForm'
const tableHeader = ['Name', 'ContactNumber','Address',"CompanyName",'licenceType','licenceNumber'];

export default function Content({ data, updateData }) {
  const [formOpen, setFormOpen] = useState(false)
  const [selectedData, setselectedData] = useState();
  const tableData = tableHeaderReplace(data, ['name', 'contactNumber', 'address','companyName','licenceType','licenceNumber' ], tableHeader);


  const admin = localStorage.getItem('role') === 'admin' ;

  const actionHandle = async (e) => {
    console.log(e.action);
    if (e.action == 'delete') {
      console.log(e.data._id);
      setselectedData(e.data);
      deleteDriver( e.data._id )
        .then(() => {
          updateData();
        })
        .catch((error) => {
          console.error(error);
          toast.error(error.response.data.message);
        });
    } else if(e.action == 'Edit') {
      console.log(e.action)
      setFormOpen(true)
      setselectedData(e.data);
    }else{
      console.log(e.action)
    }
   
     
  };

  return (
    <>
     {
      formOpen &&
     <DriverAdForm open={formOpen} getData={updateData} data={selectedData} isEdit={true} onClose={() => { setFormOpen(false) }} />

    
     }

      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={admin}
        actions={['Edit','delete']}
        onActionChange={actionHandle}
      />
    </>
  );
}
