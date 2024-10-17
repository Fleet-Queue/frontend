import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Typography,Tooltip } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import EarningIcon from 'assets/images/icons/icons8-truck-24.png';
import MovingIcon from '@mui/icons-material/Moving';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AllocatedDetailsDialog from '../Default/../../../ui-component/dialogs/AllocatedDetailsDialog';

import { useEffect, useState } from 'react';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const AllocatedOrders = ({ isLoading, data }) => {
  const theme = useTheme();
  const [truckData, setTruckData] = useState(data);
  useEffect(() => {
  
    setTruckData(data);
  }, [data, isLoading]);
  const [selectedDo, setSelectedDo] = useState(null);
  const [open, setOpen] = useState(false);
  
  const handleDoClose = () => {
    setSelectedDo(null);
    refreshData()
    setOpen(false)
  };

  const handleSelectDoId = (doId) => {
    setSelectedDo(doId);
    setOpen(true)
  };




  const [anchorEl, setAnchorEl] = useState(null);

const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
    setAnchorEl(null);
};

const handleUpdate = () => {
    // Your update logic here
    console.log("Update clicked");
    handleMenuClose();
};

const handleCancel = () => {
    // Your cancel logic here
    console.log("Cancel clicked");
    handleMenuClose();
};



  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
  return (
    <>
      {isLoading || !truckData ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.secondary[800],
                        mt: 1
                      }}
                    >
                      <img src={EarningIcon} alt="truck" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    {/* Badge component with MailIcon */}
                    <Badge
                      color="secondary"
                      badgeContent={ 'Alloc'}
                      max={999}
                      sx={{ marginTop: 1, marginRight: 1.5 }}
                    >
                      <MailIcon />
                    </Badge>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>

                  <Tooltip title={truckData.deliveryOrderId.name} arrow>
                      <Typography
                        sx={{
                          fontSize: '2rem',
                          fontWeight: 500,
                          mr: 1,
                          mt: 1.75,
                          mb: 0.75,
                        }}
                      >
                        {truncateText(truckData.deliveryOrderId.name, 10)}
                      </Typography>
                    </Tooltip>
                 
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        cursor: 'pointer',
                        ...theme.typography.smallAvatar,
                        backgroundColor: theme.palette.secondary[200],
                        color: theme.palette.secondary.dark
                      }}
                    >
                      <MovingIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              
              

  <Grid item>
  <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

<Typography
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                color: theme.palette.secondary[200]
              }}
              >
                 
              uploadDate: {new Date(truckData.deliveryOrderId.createdAt).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })} 
            </Typography>


              </Box>

  </Grid>

  <Grid item paddingTop={1}>
  <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

  <Button  variant="contained" color='secondary'  onClick={() => handleSelectDoId(truckData._id)}>
                 View Allocation
            </Button>

<Button  variant="contained" color='secondary' onClick={() => window.open(truckData.deliveryOrderId.doLink)}>
                 Download Do
            </Button>
              </Box>

  </Grid>


            </Grid>
          </Box>
        </CardWrapper>
      )}
        {selectedDo && <AllocatedDetailsDialog open={open} close={handleDoClose} doId={selectedDo} />}
    </>
  );
};

AllocatedOrders.propTypes = {
  isLoading: PropTypes.bool
};

export default AllocatedOrders;
