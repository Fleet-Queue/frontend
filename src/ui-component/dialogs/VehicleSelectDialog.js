import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import {getMatchingInqueueTrucks,doAllocation} from '../../utils/Service'
import { Box } from '@mui/system';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const VehicleSelectDialog = (props) => {


    const [open, setOpen] = React.useState(props.open);

    let maxWidth = 'md'
    const [data, setData] = React.useState([]);

  
  
    const handleClose = () => {
      setOpen(false);
      props.close()
  
    };
    
   const handleAllocation = (data) =>{
     console.log(data)
     if(!props.date || !props.doId){
      console.log(err)
      return false;
     }
     doAllocation({
      doBookingId:props.doId,
      doDate:props.date,
      truckBookingId:data
     }).then((res)=>{
   console.log(res)
   toast.success("DO allocation successfull!")
   handleClose()
     }).catch((err)=>{
      toast.error(err.response.data.message)
      console.log(err)
     })
   }
    
    const getTrucks = (data) =>{
      console.log(data)
      getMatchingInqueueTrucks(data).then((res)=>{
          setData(res)
          console.log(res);
         }).catch((err) => {
        console.log(err)
         })
      }
  
    useEffect(() => {
        ///checking required. api call multiple
        if(props.type){
               
            getTrucks({status:"inqueue",type:props.type,date:props.date})
        }
    }, [])
    

    return (
        <React.Fragment>
         
          <Dialog
           fullWidth={true}
           maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1, color:'white' }} variant="h3" component="div">
                  Truck Allocation
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Close
                </Button>
              </Toolbar>
            </AppBar>
            <List>
            {data.length === 0 && (
              <Box sx={{   display: 'flex',justifyContent: 'center' }}>

  <Typography>No Trucks Inqueue within the date and type</Typography>
              </Box>
)}
      
            { data.map((row)=>(
                <>
                <ListItemButton key={row._id}>
                <ListItemText
                  primary={row.truck.name}
                  secondary={row.truck.registrationNumber}
                />
                   <ListItemText
                  primary={row.truck.companyId.name}
                  secondary={row.truck.companyId.contactNumber}
                />
                   <ListItemText
                  primary={row.truck.category}
                  secondary={row.truck.truckType+" FT"}
                />
                  <Button variant="contained" onClick={()=>handleAllocation(row._id)}>
            Allocate
          </Button>
              </ListItemButton>
              <Divider />
              </>
            ))}
            

           

            </List>
          </Dialog>
        </React.Fragment>
      );
}

export default VehicleSelectDialog



