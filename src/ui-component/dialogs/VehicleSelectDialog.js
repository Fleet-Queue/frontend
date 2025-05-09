import * as React from 'react';
import {
  Dialog,
  DialogContent,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
  Grid,
  Box,
  Stack,
  useMediaQuery,
  useTheme,
  Slide
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMatchingInqueueTrucks, doAllocation } from '../../utils/Service';
import dayjs from 'dayjs';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VehicleSelectDialog = ({ open: propOpen, close, date, doId, type }) => {
  const [open, setOpen] = React.useState(propOpen);
  const [data, setData] = React.useState([]);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
    close();
  };

  const handleAllocation = (truckBookingId) => {
    if (!date || !doId) {
      toast.error("Date or DO ID missing");
      return;
    }

    doAllocation({ doBookingId: doId, doDate: date, truckBookingId })
      .then(() => {
        toast.success("DO allocation successful!");
        handleClose();
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Allocation failed");
        console.error(err);
      });
  };

  const getTrucks = () => {
    if (!type || !date) return;
    getMatchingInqueueTrucks({ status: "inqueue", type, date })
      .then((res) => setData(res))
      .catch(console.error);
  };

  useEffect(() => {
    getTrucks();
  }, []);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1, color: 'white' }} variant="h3">
            Truck Allocation
          </Typography>
          <Button color="inherit" onClick={handleClose}>
            Close
          </Button>
        </Toolbar>
      </AppBar>

      <DialogContent dividers>
        {data.length === 0 ? (
          <Box display="flex" justifyContent="center" py={4}>
            <Typography variant="subtitle1" color="text.secondary">
              No trucks in queue for the selected date and type.
            </Typography>
          </Box>
        ) : (
          <List>
            {data.map((row, idx) => (
              <React.Fragment key={row._id}>
                <ListItem disableGutters sx={{ 
  bgcolor: idx % 2 === 0 ? 'background.default' : 'grey.100', 
  borderRadius: 1, 
  px: 2, 
  py: 1 
}}>
                  <Box width="100%">
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={1}>
                     <Box
  sx={{
    display: 'inline-block',
    bgcolor: 'primary.dark',
    color: 'primary.contrastText',
    px: 1.2,
    py: 0.5,
    borderRadius: 1,
    fontWeight: 600,
    fontSize: '0.95rem',
  }}
>
  #{idx + 1}
</Box>

                      </Grid>

                      <Grid item xs={12} sm={3}>
                        <Stack spacing={0.5}>
                          <Typography variant="body1" fontWeight={500}>
                            {row.truck.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {row.truck.registrationNumber}
                          </Typography>
                        </Stack>
                      </Grid>

                      <Grid item xs={9} sm={3}>
                        <Stack spacing={0.5}>
                          <Typography variant="body1">{row.truck.companyId.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {row.truck.companyId.contactNumber}
                          </Typography>
                        </Stack>
                      </Grid>

                      <Grid item xs={3} sm={3}>
                        <Stack spacing={0.5}>
                          <Typography variant="body1">{row.truck.category}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {row.truck.truckType} FT
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {dayjs(row.createdAt).format('DD/MM/YYYY hh:mm:ss A')} 
                          </Typography>
                        </Stack>
                      </Grid>

                      <Grid item xs={12} sm={2}>
                        <Button
                          fullWidth={isXs}
                          variant="contained"
                          color="primary"
                          onClick={() => handleAllocation(row._id)}
                        >
                          Allocate
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </ListItem>
                <Divider sx={{ my: 1 }} />
              </React.Fragment>
            ))}
          </List>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VehicleSelectDialog;
