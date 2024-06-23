import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import Content from './content';
import Tools from './tools';
import AddForm from './AddForm';
import { getAllDoUpload } from '../../../utils/Service';



export default function Index() {
  const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);
  let { partyId } = useParams();

  const getAllPendingDo = async (partyId) => {
    try {
      let data={status:0}
      if(partyId){
        data.partyId = partyId;
      }
      const res = await getAllDoUpload(data);
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPendingDo(partyId);
  }, []);

  return (
    <Stack direction={'column'} gap={2}>
      {
      
          <AddForm data={partyId} open={formOpen} getBookings={getAllPendingDo} onClose={
            () =>{
            
              setFormOpen(false)
              getAllPendingDo(partyId)
          }
          } />

        
      }
      <Tools partyId={partyId} buttonClick={() => setFormOpen(true)} />
      <Content partyId={partyId} data={data} updateData={getAllPendingDo} />
    </Stack>
  );
}
