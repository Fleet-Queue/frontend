import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import { gridSpacing } from 'store/constant';
import { getTruckBasedOnStatus, getAllDoUpload } from '../../../utils/Service';
// import PopularCard from './PopularCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { toast } from 'react-toastify';
import OpenDos from './OpenDos';
// import { useNavigate } from 'react-router';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  // const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [inQueue, setInQueue] = useState([]);
  const [onGoing, setOnGoing] = useState([]);

  const [doUploads, setDoUploads] = useState([]);
  // const [onGoingLoading, setOnGoingLoading] = useState(false);
  // const [inQueueLoading, setInQueueLoading] = useState(false);
  const [role, setRole] = useState('');

  const getAlluploadedDo = () => {
    getAllDoUpload({ status: 0 })
      .then((res) => {
        setDoUploads(res);
        console.log(res);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };

  const getOngoingTrucks = () => {
    // setOnGoingLoading(true)
    getTruckBasedOnStatus({ status: 'ongoing' })
      .then((res) => {
        console.log(res);
        setOnGoing(res);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };

  const getInQueueTrucks = () => {
    // setInQueueLoading(true)
    getTruckBasedOnStatus({ status: 'inqueue' })
      .then((res) => {
        console.log(res);
        setInQueue(res);
        // setInQueueLoading(false)
      })
      .catch((err) => {
        // setInQueueLoading(false)
        toast.error(err.response.data.msg);
      });
  };
  useEffect(() => {
    let userRole = localStorage.getItem('role');
    setRole(localStorage.getItem('role'));
    getOngoingTrucks();
    getInQueueTrucks();
    if (userRole === 'admin') {
      getAlluploadedDo();
    }
    setLoading(false);
    console.log(role);
  }, []);

  return (
    <div style={{ overflowX: 'auto' }}>
      <Grid container spacing={gridSpacing}>
        {/* transporter dashboard */}
        {role === 'transporter'  ? (
        <>
          <Grid item xs={12}>
            <Grid py={4}>
              <Typography variant="h2">Ongoing</Typography>
            </Grid>
            <Grid container spacing={gridSpacing}>
              {onGoing && onGoing.length > 0 ? (
                onGoing.map((result) => (
                  <Grid item key={result._id} lg={4} md={4} sm={6} xs={12}>
                    <EarningCard data={result} isLoading={isLoading} />
                  </Grid>
                ))
              ) : (
                <Grid item key={1} lg={4} md={4} sm={6} xs={12}>
                  {isLoading ? (
                    <EarningCard data={[]} isLoading={true} />
                  ) : (
                    <Typography variant="body1">Currently No Ongoing Trucks</Typography> // Show message when no data and not loading
                  )}
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid py={3}>
              <Typography variant="h2">In Queue</Typography>
            </Grid>
            <Grid container spacing={gridSpacing}>
              {inQueue && inQueue.length > 0 ? (
                inQueue.map((result) => (
                  <Grid item key={result.registrationNumber} lg={4} md={4} sm={6} xs={12}>
                    <TotalOrderLineChartCard data={result} isLoading={isLoading} />
                  </Grid>
                ))
              ) : (
                <Grid item key={1} lg={4} md={4} sm={6} xs={12}>
                  {isLoading ? (
                    <TotalOrderLineChartCard data={[]} isLoading={true} />
                  ) : (
                    <Typography variant="body1">Currently No Inqueue available</Typography> // Show message when no data and not loading
                  )}
                </Grid>
              )}
            </Grid>
          </Grid>
        </>
):(
  <></>
)
}
        {/* //forwarder dashboard */}
        {/* {role === 'forwarder' || role === 'both' ? (
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={8}>
                <TotalGrowthBarChart isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} md={4}>
                <PopularCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <></>
        )} */}

        {role === 'admin' ? (
          <Grid item xs={12}>
            <Grid py={3}>
              <Typography variant="h2">Open Dos</Typography>
            </Grid>
            <Grid container spacing={gridSpacing}>
              {doUploads && doUploads.length > 0 ? (
                doUploads.map((result) => (
                  <Grid item key={result._id} lg={4} md={4} sm={6} xs={12}>
                    <OpenDos data={result} isLoading={isLoading} />
                  </Grid>
                ))
              ) : (
                <Grid item key={1} lg={4} md={4} sm={6} xs={12}>
                  {isLoading ? (
                    <TotalOrderLineChartCard data={[]} isLoading={true} />
                  ) : (
                    <Typography variant="body1">No Open Dos</Typography> // Show message when no data and not loading
                  )}
                </Grid>
              )}
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </div>
  );
};

export default Dashboard;
