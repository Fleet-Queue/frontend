import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TableActionButton from 'ui-component/TableActionButton';
import VehicleSelectDialog from 'ui-component/dialogs/VehicleSelectDialog';
import AllocatedDetailsDialog from 'ui-component/dialogs/AllocatedDetailsDialog';


const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function StyledTable({
  data,
  header,
  isShowSerialNo = false,
  isShowAction = false,
  actions = ['Edit', 'Delete'],
  onActionChange,
  onClickAction
}) {
  const [selectedTruckType, setSelectedTruckType] = useState(null);
  const [selectedDo, setSelectedDo] = useState(null);

  const handleClick = (data)=>{
if(onClickAction){
    onClickAction(data);
}
  }
  const [open, setOpen] = useState(false);


  const handleTruckDetailClose = () => {
    setSelectedTruckType(null);
    setOpen(false)
  };



  const handleDoClose = () => {
    setSelectedDo(null);
    setOpen(false)
  };
  return (
    <MainCard>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {isShowSerialNo && <TableCell sx={{ color: 'primary.main' }}>SLNO</TableCell>}
              {header.map((head, i) => (
                <TableCell key={i} sx={{ color: 'primary.main' }}>
                  {head}
                </TableCell>
              ))}
              {isShowAction && <TableCell sx={{ color: 'primary.main' }}>Action</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dt, ind) => {
             
              return (
                <TableRow onClick={()=>handleClick(dt._id)} key={ind}>
                  {isShowSerialNo && <TableCell>{ind + 1}</TableCell>}
                  {/* {header.map((head, i) => {
                   
                      return <TableCell key={i}>{dt[`${head}`]}</TableCell>;
                
                  })} */}
<TableCell >{dt.truck.registrationNumber}</TableCell>
<TableCell>{dt.allocation.DOBookingId.partyId.name}</TableCell>
<TableCell >{dt.allocation.DOBookingId.partyId.locationId.name}</TableCell>
<TableCell >{dt.allocation.DOBookingId.partyId.contactNumber}</TableCell>
<TableCell >₹{dt.allocation.DOBookingId.rate}</TableCell>
<TableCell >{formatDate(dt.availableFrom)}</TableCell>
                  {isShowAction && (
                    <TableCell>
                      <TableActionButton
                        data={dt}
                        onActionChange={(e) => {
                          onActionChange(e);
                        }}
                        actions={actions}
                      />
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedTruckType && <VehicleSelectDialog open={open}  close={handleTruckDetailClose} type={selectedTruckType} />}
      {selectedDo && <AllocatedDetailsDialog open={open} close={handleDoClose} doId={selectedDo} />}
    </MainCard>
  );
}
