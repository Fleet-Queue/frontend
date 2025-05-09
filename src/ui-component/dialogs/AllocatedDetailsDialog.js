import * as React from 'react';
import {
  Button, Dialog,  AppBar, Toolbar, IconButton, Typography,
  Slide, Grid, Paper, Box, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { getAllocationDetails, changeAllocationStatus } from '../../utils/Service';
import { toast } from 'react-toastify';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AllocatedDetailsDialog = ({ open, close, doId }) => {
  const [data, setData] = React.useState({});

  const handleClose = () => {
    close();
  };

  const formatDateTime = (timestamp) => {
    const dateObj = new Date(timestamp);
    return dateObj.toLocaleString();
  };

  const getAllocDetails = (data) => {
    getAllocationDetails(data).then((res) => {
      setData(res);
    }).catch((err) => {
      console.error(err);
      toast.error(err.response?.data?.message || 'Error fetching allocation details');
    });
  };

  const handleStatusChange = (allocId, status) => {
    changeAllocationStatus({ status, allocId }).then(() => {
      toast.success("Status updated successfully");
      getAllocDetails({ doBookingId: doId });
    }).catch((err) => {
      console.error(err);
      toast.error(err.response?.data?.message || 'Error updating status');
    });
  };

  useEffect(() => {
    if (doId) {
      getAllocDetails({ doBookingId: doId });
    }
  }, [doId]);

  const renderStatusButton = (data) => {
    switch (data.status) {
      case "allocated":
        return <Button variant="contained" color="info" onClick={()=>handleStatusChange(data._id, "ongoing")} disabled>Move to Live</Button>;
      case "ongoing":
        return <Button variant="contained" color="warning" onClick={()=>handleStatusChange(data._id,'done')} disabled>Move to Done</Button>;
      case "expired":
        return <Button variant="outlined" color="error" disabled>Expired</Button>;
      default:
        return null;
    }
  };

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1, color: 'white' }} variant="h3" component="div">
            Allocated Truck Details
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Close
          </Button>
        </Toolbar>
      </AppBar>

      {data?.truckBookingId && (
        <Box p={2}>
          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>Truck Info</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography><strong>Name:</strong> {data.truckBookingId.truck.name}</Typography>
                <Typography><strong>Reg. No.:</strong> {data.truckBookingId.truck.registrationNumber}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography><strong>Category:</strong> {data.truckBookingId.truck.category}</Typography>
                <Typography><strong>Type:</strong> {data.truckBookingId.truck.truckType} FT</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography><strong>Allocated On:</strong> {formatDateTime(data.allocatedOn)}</Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>Company Info</Typography>
            <Typography><strong>Company:</strong> {data.truckBookingId.truck.companyId.name}</Typography>
            <Typography><strong>Contact:</strong> {data.truckBookingId.truck.companyId.contactNumber}</Typography>
          </Paper>

          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Driver Info & Status</Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Typography><strong>Driver:</strong> {data.truckBookingId.truck.driverId.name}</Typography>
                <Typography><strong>Contact:</strong> {data.truckBookingId.truck.driverId.contactNumber}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography><strong>Status:</strong> {data.status}</Typography>
                <Box mt={1}  sx={{ display: 'none' }}>
                  {renderStatusButton(data)}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </Dialog>
  );
};

export default AllocatedDetailsDialog;
