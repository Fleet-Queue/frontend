import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import TruckIcon from 'assets/images/icons/icons8-truck-24.png';

// assets
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
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

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const OpenDos = ({ isLoading,data }) => {
  const theme = useTheme();
  const [doData, setDoData] = useState(data)
  const navigate = useNavigate()
 useEffect(() => {

  console.log(isLoading)
  console.log(data)
  setDoData(data)
 }, [data, isLoading])
 

  return (
    <>
      {isLoading  || !doData ?  (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item   onClick={() => navigate('/doUpload')}>
                <Grid container justifyContent="space-between">
                  <Grid item>
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
                  
               
                </Grid>
              </Grid>
              <Grid item   onClick={() => navigate('/doUpload')}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '2rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{doData.name}</Typography>
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
                      <HourglassBottomIcon fontSize="inherit"  />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
       <Box style={{ display: 'flex', justifyContent: 'space-between' }}>

    <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: theme.palette.primary[200]
                  }}
                  >
                  uploadDate: {doData.uploadDate}
                </Typography>

    <Button  variant="contained"  onClick={() => window.open(doData.link)}>
                     View Do
                </Button>
                  </Box>

                
           
               
         
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
