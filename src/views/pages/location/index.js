import React, { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import Content from './content';
import Tools from './tools';
import AddForm from './AddForm';
import { getAllLocation,addLocation } from '../../../utils/Service';



export default function Index() {
  const [formOpen, setFormOpen] = useState(false);
  const [data, setData] = useState([]);

  const getLocation = async () => {
    try {
      const res = await getAllLocation();
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
      <AddForm open={formOpen} addLocation={addLocation} getLocation={getLocation} onClose={() => setFormOpen(false)} />
      <Tools buttonClick={() => setFormOpen(true)} />
      <Content data={data} updateData={getLocation} />
    </Stack>
  );
}
