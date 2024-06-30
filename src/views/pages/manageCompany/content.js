import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
import CompanyAdForm from './CompanyAdForm';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {deleteCompany} from '../../../utils/Service'
const tableHeader = ['Name', 'Owner Name', 'ContactNumber','Address',"CompanyType"];

export default function Content({ data, updateData }) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedData, setselectedData] = useState();
  const tableData = tableHeaderReplace(data, ['name', 'ownerName', 'contactNumber', 'address','companyType' ], tableHeader);




  const actionHandle = async (e) => {
    console.log(e);
    if (e.action == 'delete') {
      console.log(e.data._id);
      setselectedData(e.data);
      deleteCompany( e.data._id )
        .then(() => {
          updateData();
        })
        .catch((error) => {
          console.error(error);
          toast.error(error.response.data.message);
        });
    }else if(e.action == 'Edit'){
      console.log("edit company")
    } else {
      setselectedData();
    }
     
  };

  return (
    <>
      {/* <CompanyAdForm
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
        }}
        data={selectedData}
        isEdit={false}
      />
       */}
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={true}
        actions={['Edit','delete']}
        onActionChange={actionHandle}
      />
    </>
  );
}
