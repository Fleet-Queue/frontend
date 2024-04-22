import React, { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import Content from './content';
import Tools from './tools';
import PartyAddForm from './PartyAddForm';
import { getAllParties } from '../../../utils/Service';
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getParties = async () => {
    try {
      const res = await getAllParties();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getParties();
  }, []);

  const partyOnClick = async (id) => {
 console.log(id)
 console.log("-------------------------------------------------------------------ddddddddddddddddddddddddddddd")
navigate("/doBooking/"+id);
  }

  return (
    <Stack direction={'column'} gap={2}>
      <PartyAddForm open={formOpen} getTrucks={getParties} onClose={() => setFormOpen(false)} />
      <Tools buttonClick={() => setFormOpen(true)} />
      <Content navigation={partyOnClick} data={data} updateData={getParties} />
    </Stack>
  );
}
