import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import TableActionButton from 'ui-component/TableActionButton';
import VehicleSelectDialog from 'ui-component/dialogs/VehicleSelectDialog';
import AllocatedDetailsDialog from 'ui-component/dialogs/AllocatedDetailsDialog';
import { changeAllocationStatus } from '../../../utils/Service';
import { toast } from 'react-toastify';

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
  refresh,
  onClickAction
}) {
  const [selectedTruckType, setSelectedTruckType] = useState(null);
  const [selectedDo, setSelectedDo] = useState(null);

  const handleClick = (data) => {
    if (onClickAction) {
      onClickAction(data);
    }
  };
  const [open, setOpen] = useState(false);

  const handleTruckDetailClose = () => {
    setSelectedTruckType(null);
    setOpen(false);
  };

  const handleStatusChange = (allocId, status) => {
    // if (window.confirm(`Are you sure you want to change the status to ${status}?`)) {
      changeAllocationStatus({ status, allocId })
        .then((res) => {
          console.log(res);
          toast.success("Status updated successfully");
          refresh({ status: 'allocated' });
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        });
    // }
  };

  const handleDoClose = () => {
    setSelectedDo(null);
    setOpen(false);
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
                <TableRow onClick={() => handleClick(dt._id)} key={ind}>
                  {isShowSerialNo && <TableCell>{ind + 1}</TableCell>}

                  <TableCell>{dt.truck.registrationNumber}</TableCell>
                  <TableCell>{dt.allocation.DOBookingId.partyId.name}</TableCell>
                  <TableCell>{dt.allocation.DOBookingId.partyId.locationId.name}</TableCell>
                  <TableCell>{dt.allocation.DOBookingId.partyId.contactNumber}</TableCell>
                  <TableCell>₹{dt.allocation.DOBookingId.rate}</TableCell>
                  <TableCell>{formatDate(dt.availableFrom)}</TableCell>
                  <TableCell>
                    {dt.allocation.status === "allocated" ? (
                      <Button variant="contained" onClick={() => handleStatusChange(dt.allocation._id, "ongoing")}>
                        Move to Live
                      </Button>
                    ) : dt.allocation.status === "ongoing" ? (
                      <Button variant="contained" onClick={() => handleStatusChange(dt.allocation._id, "done")}>
                        Move to Done
                      </Button>
                    ) : dt.allocation.status === "expired" ? (
                      <Button variant="contained" disabled>
                        Expired
                      </Button>
                    ) : null}
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
      {selectedTruckType && <VehicleSelectDialog open={open} close={handleTruckDetailClose} type={selectedTruckType} />}
      {selectedDo && <AllocatedDetailsDialog open={open} close={handleDoClose} doId={selectedDo} />}
    </MainCard>
  );
}
