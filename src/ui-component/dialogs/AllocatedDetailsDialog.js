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
import {getAllocationDetails} from '../../utils/Service'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const AllocatedDetailsDialog = (props) => {


    const [open, setOpen] = React.useState(props.open);

    let maxWidth = 'md'
    const [data, setData] = React.useState({});

   
  
    const handleClose = () => {
      setOpen(false);
      props.close()
  
    };

    const formatDateTime = (timestamp) => {
      const dateObj = new Date(timestamp);
      const formattedDateTime = dateObj.toLocaleString(); // Convert to local date and time format
      return formattedDateTime;
  };
    
    
    const getAllocDetails = (data) =>{
      getAllocationDetails(data).then((res)=>{
          setData(res)
          console.log(res);
         }).catch((err) => {
        console.log(err)
         })
      }
  
    useEffect(() => {
        ///checking required. api call multiple
        if(props.doId){
               
          getAllocDetails({doBookingId:props.doId})
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
                <Typography sx={{ ml: 2, flex: 1 }} variant="h3" component="div">
                  Truck Allocation
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Close
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              
            {data && data.truckBookingId &&
                <>
                <ListItemButton key={1}>
                <ListItemText
                  primary={data.truckBookingId.truck.name}
                  secondary={data.truckBookingId.truck.registrationNumber}
                />
                
                   <ListItemText
                   primary={data.truckBookingId.truck.category}
                   secondary={data.truckBookingId.truck.truckType+" FT"}
                />
                   <ListItemText
                  primary={"allocated on:"}
                  secondary={formatDateTime(data.allocatedOn)}
                />
            
            <ListItemText
                  primary={data.truckBookingId.truck.companyId.name}
                  secondary={data.truckBookingId.truck.companyId.contactNumber}
                  
                  // ={data.truckBookingId.truck.companyId.address}
                />
              </ListItemButton>

              <ListItemButton key={2}>
               
                
                <ListItemText
                   primary={data.truckBookingId.truck.companyId.ownerName}
                   secondary={data.truckBookingId.truck.companyId.address}
                />

                   <ListItemText
                   primary={"driver: "+data.truckBookingId.truck.driverId.name}
                   secondary={data.truckBookingId.truck.driverId.contactNumber}
                />

<ListItemText
                  primary={"Date on:"}
                  secondary={formatDateTime(data.truckBookingId.availableFrom)}
                />
                  
                  <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
              </ListItemButton>
              <Divider />
              </>
            }
            

           

            </List>
          </Dialog>
        </React.Fragment>
      );
}

export default AllocatedDetailsDialog


