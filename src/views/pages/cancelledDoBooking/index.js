import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import Content from './content';
import Tools from './tools';
// import AddForm from './AddForm';
import { getAllBooking } from '../../../utils/Service';



export default function Index() {
  // const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);
  let { partyId } = useParams();

  const getBookings = async (partyId) => {
    try {
      let data={status:"cancelled"}
      if(partyId){
        data.partyId = partyId;
      }
      const res = await getAllBooking(data);
     
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBookings(partyId);
  }, []);

  return (
    <Stack direction={'column'} gap={2}>
      {/* {
        partyId && (
          <AddForm data={partyId} open={formOpen} getBookings={getBookings} onClose={
            () =>{
      
              setFormOpen(false)
            getBookings(partyId)
          }
          } />

        )
      } */}
      <Tools partyId={partyId} /* buttonClick={() => setFormOpen(true)}*/ />
      <Content partyId={partyId} data={data} updateData={getBookings} />
    </Stack>
  );
}
