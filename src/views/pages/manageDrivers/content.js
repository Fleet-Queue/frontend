import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';

import { useState } from 'react';
import { toast } from 'react-toastify';

const tableHeader = ['Name', 'Owner Name', 'ContactNumber','Address',"CompanyName",'licenceType','licenceNumber'];

export default function Content({ data, updateData }) {

  const [selectedData, setselectedData] = useState();
  const tableData = tableHeaderReplace(data, ['name', 'ownerName', 'contactNumber', 'address','companyName','licenceType','licenceNumber' ], tableHeader);




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
    } else {
      setselectedData();
    }
   
     
  };

  return (
    <>
     
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
