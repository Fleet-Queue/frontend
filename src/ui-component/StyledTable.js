import React, { useState } from 'react';
import MainCard from './cards/MainCard';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TableActionButton from './TableActionButton';
import VehicleSelectDialog from './dialogs/VehicleSelectDialog';
import AllocatedDetailsDialog from './dialogs/AllocatedDetailsDialog';

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

  const handleSelectTruckType = (truckType) => {
    setSelectedTruckType(truckType);
    console.log(truckType);
    setOpen(true)
  };

  const handleTruckDetailClose = () => {
    setSelectedTruckType(null);
    setOpen(false)
  };

 
  const handleSelectDoId = (doId) => {
    setSelectedDo(doId);
    setOpen(true)
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
              console.log(dt);
              console.log('------------------------------------------');
              return (
                <TableRow onClick={()=>handleClick(dt._id)} key={ind}>
                  {isShowSerialNo && <TableCell>{ind + 1}</TableCell>}
                  {header.map((head, i) => {
                    if (head.toUpperCase() === 'IMAGE') {
                      return (
                        <TableCell key={i}>
                          <img style={{ height: '100px' }} src={`${dt[`${head}`]}`} alt="img" />
                        </TableCell>
                      );
                    } else if (dt.status != 'allocated' && head.toUpperCase() === 'ALLOCATION') {
                      return (
                        <TableCell key={i}>
                          <Button variant="contained" onClick={() => handleSelectTruckType(dt.truckType)}>
                            Allocate
                          </Button>
                
                        </TableCell>
                      );
                    } else if (dt.status == 'allocated' && head.toUpperCase() === 'ALLOCATION') {
                      return (
                        <TableCell key={i}>
                          <Button variant="contained" onClick={() => handleSelectDoId(dt._id)}>
                          View Allocation
                          </Button>
                        </TableCell>
                      );
                    } else {
                      return <TableCell key={i}>{dt[`${head}`]}</TableCell>;
                    }
                  })}
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
