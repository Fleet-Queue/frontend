import React, { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import Content from './content';
import Tools from './tools';
import AddForm from './AddForm';
import { gellAllLocation } from '../../../utils/Service';



export default function Index() {
  const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);

  const getLocation = async () => {
    try {
      const res = await gellAllLocation();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Stack direction={'column'} gap={2}>
      <AddForm open={formOpen} getLocation={getLocation} onClose={() => setFormOpen(false)} />
      <Tools buttonClick={() => setFormOpen(true)} />
      <Content data={data} updateData={getLocation} />
    </Stack>
  );
}
