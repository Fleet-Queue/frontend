// CancelDialog.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField } from '@mui/material';

const CancelDialog = ({ open, handleClose, itemId, itemName, onConfirm }) => {
  const [cancelReason, setCancelReason] = useState('');

  const handleConfirm = () => {
    if (cancelReason.trim() === '') {
      alert("Please provide a reason for cancellation."); // Simple alert for empty reason
      return;
    }
    onConfirm(itemId, cancelReason); // Pass the reason along with the item ID
    handleClose(); // Close the dialog
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Cancel Item</DialogTitle>
      <DialogContent>
        <Typography>   Are you sure you want to cancel the order for <strong>{itemName}</strong>?</Typography>
        <TextField
          autoFocus
          margin="dense"
          label="Cancel Reason"
          type="text"
          fullWidth
          variant="outlined"
          value={cancelReason}
          onChange={(e) => setCancelReason(e.target.value)} 
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="secondary">
          Confirm Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelDialog;
