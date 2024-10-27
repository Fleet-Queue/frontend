// CancelDialog.js
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField } from '@mui/material';

const CancelDialog = ({ open, handleClose, itemId, itemName, onConfirm,formHeading="cancel" }) => {
  const [cancelReason, setCancelReason] = useState('');

  const handleConfirm = () => {
    if (cancelReason.trim() === '') {
      alert("Please provide a reason for cancellation."); 
      return;
    }
    onConfirm(itemId, cancelReason); 
    handleClose(); 
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{formHeading} Item</DialogTitle>
      <DialogContent>
        <Typography>   Are you sure you want to {formHeading} the order for <strong>{itemName}</strong>?</Typography>
        <TextField
          autoFocus
          margin="dense"
          label=" Reason"
          type="text"
          fullWidth
          variant="outlined"
          value={cancelReason}
          onChange={(e) => setCancelReason(e.target.value)} 
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          back
        </Button>
        <Button onClick={handleConfirm} color="error">
          Confirm {formHeading}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelDialog;
