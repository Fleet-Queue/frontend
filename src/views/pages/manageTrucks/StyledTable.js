import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TableActionButton from 'ui-component/TableActionButton';
import VehicleSelectDialog from 'ui-component/dialogs/VehicleSelectDialog';
import AllocatedDetailsDialog from 'ui-component/dialogs/AllocatedDetailsDialog';
import dayjs from 'dayjs';


export default function StyledTable({
  data,
  header,
  isShowSerialNo = false,
  isShowAction = false,
  actions = ['Edit', 'Delete'],
  onActionChange,
  onClickAction,
  refreshData,
  addTruckBooking
}) {
  const [selectedTruckType, setSelectedTruckType] = useState(null);
  const [selectedDate, setDate] = useState(null);
  const [selectedDo, setSelectedDo] = useState(null);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const handleClick = (data) => {
    if (onClickAction) {
      onClickAction(data);
    }
  };
  const [open, setOpen] = useState(false);

  const handleSelectTruckType = (data) => {
    setSelectedTruckType(data.truckType);
    setDate(data.date);
    setSelectedBookingId(data.doId);
    console.log(data.truckType);
    setOpen(true);
  };

  const handleTruckDetailClose = () => {
    setSelectedTruckType(null);
    refreshData();
    setOpen(false);
  };

  const handleSelectDoId = (doId) => {
    setSelectedDo(doId);
    setOpen(true);
  };

  const handleDoClose = () => {
    setSelectedDo(null);
    refreshData();
    setOpen(false);
  };

  const handleSubmit = (id) => {
    console.log("heyyyyy")
    console.log(id)
    const dateToUse = dayjs(); // use selectedDate if available, else use today
    const availableFrom = dayjs(dateToUse).format('YYYY-MM-DD'); // Format for API

    let truckId = id;
    addTruckBooking({ truckId, availableFrom });
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
              <TableCell sx={{ color: 'primary.main' }}>Add To Queue</TableCell>
              {isShowAction && <TableCell sx={{ color: 'primary.main' }}>Action</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dt, ind) => {
              return (
                <TableRow onClick={() => handleClick(dt._id)} key={ind}>
                  {isShowSerialNo && <TableCell>{ind + 1}</TableCell>}
                  {header.map((head, i) => {
                    if (head.toUpperCase() === 'IMAGE') {
                      return (
                        <TableCell key={i}>
                          <img style={{ height: '100px' }} src={`${dt[`${head}`]}`} alt="img" />
                        </TableCell>
                      );
                    } else if (dt.status != 'allocated' && head.toUpperCase() === 'ALLOCATION') {
                      console.log('dfffffffffffffffffffffffffffffffffffff');
                      console.log(dt);
                      return (
                        <TableCell key={i}>
                          <Button
                            variant="contained"
                            onClick={() => handleSelectTruckType({ doId: dt._id, truckType: dt.truckType, date: dt['available from'] })}
                          >
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
                    } else if (head.toUpperCase() === 'VIEW DO') {
                      // Check if 'View DO' exists, otherwise use the fallback 'deliveryOrderId.doLink'
                      const viewDoLink = dt['view DO'] || (dt.deliveryOrderId && dt.deliveryOrderId.doLink);

                      if (viewDoLink) {
                        return (
                          <TableCell key={i}>
                            <Button variant="contained" onClick={() => window.open(viewDoLink, '_blank')}>
                              View File
                            </Button>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={i}>
                            <Button variant="contained" disabled>
                              No File
                            </Button>
                          </TableCell>
                        );
                      }
                    } else if (dt.status != 'isHighRangeArea' && head.toUpperCase() === 'ISHIGHRANGEAREA') {
                      return <TableCell key={i}>{dt[`${head}`] ? 'Yes' : 'No'}</TableCell>;
                    } else if (head.toUpperCase() === 'STATUS') {
                      return <TableCell key={i}>{dt[`${head}`] ? 'Active' : 'Inactive'}</TableCell>;
                    } else {
                      return <TableCell key={i}>{dt[`${head}`]}</TableCell>;
                    }
                  })}
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={
                        () => handleSubmit(dt._id) // Pass the truck ID to the handleSubmit function
                      }
                    >
                      Add To Queue
                    </Button>
                  </TableCell>
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
      {selectedTruckType && (
        <VehicleSelectDialog
          open={open}
          close={handleTruckDetailClose}
          doId={selectedBookingId}
          date={selectedDate}
          type={selectedTruckType}
        />
      )}
      {selectedDo && <AllocatedDetailsDialog open={open} close={handleDoClose} doId={selectedDo} />}
    </MainCard>
  );
}
