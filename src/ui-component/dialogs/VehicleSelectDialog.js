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
import {getAllTruck} from '../../utils/Service'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const VehicleSelectDialog = (props) => {


    const [open, setOpen] = React.useState(props.open);

    let maxWidth = 'md'
    const [data, setData] = React.useState([]);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      props.close()
  
    };
    
    
    const getTrucks = (data) =>{
        getAllTruck(data).then((res)=>{
          setData(res)
          console.log(res);
         }).catch((err) => {
        console.log(err)
         })
      }
  
    useEffect(() => {
        ///checking required. api call multiple
        if(props.type){
               
            getTrucks({status:"inqueue",type:props.type})
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
              
            { data.map((row)=>(
                <>
                <ListItemButton key={row._id}>
                <ListItemText
                  primary={row.name}
                  secondary={row.registrationNumber}
                />
                   <ListItemText
                  primary={row.companyId.name}
                  secondary={row.companyId.contactNumber}
                />
                   <ListItemText
                  primary={row.category}
                  secondary={row.truckType+" FT"}
                />
                  <Button variant="contained" onClick={handleClickOpen}>
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



