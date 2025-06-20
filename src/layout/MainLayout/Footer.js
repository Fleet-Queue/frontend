import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper' }}>
      <Typography variant="body2" color="text.secondary">
        Powered By{' Insign Tech Solutions '}
        {/* <Link
          href="https://insigntechsolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          insigntechsolutions.com
        </Link> */}
      </Typography>
    </Box>
  );
}