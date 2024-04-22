import { useEffect, useState } from 'react';

// material-ui
import { Grid,Typography} from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import { gridSpacing } from 'store/constant';
import {getInQueueTruck,getOngoingTruck} from '../../../utils/Service'
import PopularCard from './PopularCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { toast } from 'react-toastify';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [inQueue, setInQueue] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [role,setRole] = useState('')

 

  const getOngoingTrucks = () => {
    getOngoingTruck().then((res)=>{
      console.log(res)
setOnGoing(res)
    }).catch((err) => {
      toast.error(err.response.data.msg);
    })
  }


  const getInQueueTrucks = () => {
    getInQueueTruck().then((res)=>{
      console.log(res)
      setInQueue(res)
    }).catch((err) => {
      toast.error(err.response.data.msg);
  })
  }
  useEffect(() => {
    setRole(localStorage.getItem('role'))
    getOngoingTrucks()
    getInQueueTrucks()
    setLoading(false);
    console.log(role)
  }, []);



  return (
    <div style={{ overflowX: 'auto' }}>
    <Grid container spacing={gridSpacing}>



{/* transporter dashboard */}

{role === 'transporter' || role === 'both' ? (
       <>
       <Grid item xs={12}>
       <Grid  py={4}>
         <Typography variant="h2">Ongoing</Typography>
         </Grid>
         <Grid container spacing={gridSpacing}>
   {onGoing  && onGoing.length > 0 ? (
     onGoing.map((result) => (
       <Grid item key={result.registrationNumber} lg={4} md={4} sm={6} xs={12}>
         <EarningCard data={result} isLoading={isLoading} />
       </Grid>
     )) 
   ) : (
     <Grid item key={1} lg={4} md={4} sm={6} xs={12}>
     <EarningCard  data={[]} isLoading={true} />
   </Grid>
 
   )}
 </Grid>
 
       </Grid>
 
       <Grid item xs={12}>
       <Grid py={3}>
         <Typography variant="h2">In Queue</Typography>
         </Grid>
         <Grid container spacing={gridSpacing}>
         
         {inQueue  && inQueue.length > 0 ?
         (
           inQueue.map((result) => (
             <Grid item key={result.registrationNumber} lg={4} md={4} sm={6} xs={12}>
                <TotalOrderLineChartCard data={result} isLoading={isLoading} />
             </Grid>
           ))
         ) : (
           <Grid item key={1} lg={4} md={4} sm={6} xs={12}>
           <TotalOrderLineChartCard data={[]} isLoading={true} />
         </Grid>
         )
    }
 
        
          
         </Grid>
       </Grid>
       </>
    ) : (
<></>
    )
  }
     
  {/* //forwarder dashboard */}
     {role === 'forwarder' || role === 'both' ? (
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
    )
  }
    
     
    </Grid>
    </div>
  );
};

export default Dashboard;
