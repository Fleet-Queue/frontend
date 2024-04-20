import React, { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import Content from './content';
import Tools from './tools';
import PartyAddForm from './PartyAddForm';
import { getAllParties } from '../../../utils/Service';

export default function Index() {
  const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);

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

  return (
    <Stack direction={'column'} gap={2}>
      <PartyAddForm open={formOpen} getTrucks={getParties} onClose={() => setFormOpen(false)} />
      <Tools buttonClick={() => setFormOpen(true)} />
      <Content data={data} updateData={getParties} />
    </Stack>
  );
}
