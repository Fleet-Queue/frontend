import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import Content from './content';
import Tools from './tools';
// import AddForm from './AddForm';
import { getAllAllocatedBookings } from '../../../utils/Service';
import dayjs from 'dayjs';


export default function Index() {
  // const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  let { partyId } = useParams();

  const getBookings = async (partyId, date = selectedDate.format('DD/MM/YYYY')) => {
    try {
      let data={status:"allocated",date}
      if(partyId){
        data.partyId = partyId;
      }
    
      const res = await getAllAllocatedBookings(data);
     
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getBookings(partyId);
  }, [selectedDate]); // Add selectedDate as dependency


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
      <Content  selectedDate={selectedDate} setSelectedDate={setSelectedDate} partyId={partyId} data={data} updateData={getBookings} />
    </Stack>
  );
}
