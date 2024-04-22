import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import Content from './content';
import Tools from './tools';
import AddForm from './AddForm';
import { gellAllBooking } from '../../../utils/Service';



export default function Index() {
  const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);
  let { partyId } = useParams();
  console.log(partyId)
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  const getBookings = async () => {
    try {
      let data={}
      if(partyId){
        data.partyId = partyId;
      }
      const res = await gellAllBooking(data);
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <Stack direction={'column'} gap={2}>
      <AddForm open={formOpen} getBookings={getBookings} onClose={() => setFormOpen(false)} />
      <Tools buttonClick={() => setFormOpen(true)} />
      <Content data={data} updateData={getBookings} />
    </Stack>
  );
}
