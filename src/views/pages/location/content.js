import React from 'react';
import StyledTable from 'ui-component/StyledTable';
import { tableHeaderReplace } from 'utils/tableHeaderReplace';
import { TextField, Box, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PartyAddForm from './AddForm';

const tableHeader = ['name', 'kilometer', 'isHighRangeArea', 'tripType'];

export default function Content({ data, deleteAd, updateData }) {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedData, setselectedData] = useState();
  const [searchName, setSearchName] = useState('');
  const [searchTripType, setSearchTripType] = useState('');

  const tripTypes = ["medium", "local", "long", "nationalPermit"];


  const filteredData = data.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(searchName.toLowerCase());
    const tripTypeMatch = !searchTripType || item.tripType === searchTripType;
    return nameMatch && tripTypeMatch;
  });


  const tableData = tableHeaderReplace(
    filteredData,
    ['name', 'kilometer', 'isHighRangeArea', 'tripType'],
    tableHeader
  );

  const actionHandle = (e) => {
    console.log(e);
    if (e.action == 'delete') {
      console.log(e.data._id);
      setselectedData(e.data);
      deleteAd(e.data._id)
        .then(() => {})
        .catch((error) => {
          console.error(error);
          toast.error(error.response.data.message);
        });
    } else {
      setselectedData();
    }
    updateData();
  };

  return (
    <>
    <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Search by Name"
              variant="outlined"
              size="small"
              fullWidth
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Trip Type</InputLabel>
              <Select
                value={searchTripType}
                label="Trip Type"
                onChange={(e) => setSearchTripType(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {tripTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <PartyAddForm
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
        }}
        data={selectedData}
        isEdit={true}
      />
      <StyledTable
        data={tableData}
        header={tableHeader}
        isShowSerialNo={true}
        isShowAction={true}
        actions={['delete']}
        onActionChange={actionHandle}
      />
    </>
  );
}