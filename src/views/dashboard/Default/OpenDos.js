import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Typography, Tooltip, IconButton, Menu, MenuItem } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import TruckIcon from 'assets/images/icons/icons8-truck-24.png';

// assets
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    zIndex: 1,
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
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
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

const OpenDos = ({ isLoading, data,update,handleCancel }) => {
  const theme = useTheme();
  const [doData, setDoData] = useState(data);
  // const navigate = useNavigate();
  const admin = localStorage.getItem('role') === 'admin' ;

  useEffect(() => {
    setDoData(data);
  }, [data, isLoading]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const handleUpdate = (data) => {
    console.log("Update clicked");
    update(data)
    // Your update logic here
  };

  const handleCancelClick = (data) => {
    console.log(data)
    console.log(data._id)
    handleCancel(data._id,data.name)
  };

  return (
    <>
      {isLoading || !doData ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item onClick={() => { handleUpdate(doData);  }}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
                        mt: 1
                      }}
                    >
                      <img src={TruckIcon} alt="Notification" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <>
                          <IconButton
                            sx={{ color: 'white' }}
                            {...bindTrigger(popupState)}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={() => { handleUpdate(doData); popupState.close(); }}>Update</MenuItem>
                            {admin ? (<MenuItem onClick={() => { handleCancelClick(doData); popupState.close(); }}>Reject</MenuItem>) :
                            <MenuItem onClick={() => { handleCancelClick(doData); popupState.close(); }}>Cancel</MenuItem> }
                            
                          </Menu>
                        </>
                      )}
                    </PopupState>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item  onClick={() => { handleUpdate(doData);  }}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Tooltip title={doData.name} arrow>
                      <Typography
                        sx={{
                          fontSize: '2rem',
                          fontWeight: 500,
                          mr: 1,
                          mt: 1.75,
                          mb: 0.75,
                        }}
                      >
                        {truncateText(doData.name, 10)}
                      </Typography>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        cursor: 'pointer',
                        ...theme.typography.smallAvatar,
                        backgroundColor: theme.palette.primary[200],
                        color: theme.palette.primary.dark
                      }}
                    >
                      <HourglassBottomIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid  item sx={{ mb: 1.25 }}>
                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                    
                    }}
                  >
                    uploaded date: {doData.uploadDate}
                  </Typography>
                  <Button variant="contained" onClick={() => window.open(doData.link)}>
                    Download DO
                  </Button>
                </Box>
                <Box>
                  <Tooltip title={doData.fileName} arrow>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 300,
                      }}
                    >
                      fileName: {truncateText(doData.fileName, 20)}
                    </Typography>
                  </Tooltip>
                </Box>
{

doData.status == 6 || doData.status == 5 &&
                <Box>
                  <Tooltip title={doData.fileName} arrow>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 300,
                      }}
                    >
                      Reason: {truncateText(doData.fileName, 20)}
                    </Typography>
                  </Tooltip>
                </Box>
              }
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

OpenDos.propTypes = {
  isLoading: PropTypes.bool
};

export default OpenDos;
