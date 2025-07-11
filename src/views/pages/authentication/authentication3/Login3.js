import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Link, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import { adminLogin } from '../../../../utils/Service'


// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    const role = localStorage.getItem('role');
    console.log(user)
    if (user) {
      if(role){
      navigate("/dashboard")
      }
    }

  }, [])

  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <RouterLink to="#">
                      <Logo />
                    </RouterLink>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Hi, Welcome Back
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthLogin adminLogin={adminLogin} />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                   <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                    {/* Contact Us  */}
                    {''} 
                    <Link
                      href="https://insigntechsolutions.com/#contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                    >
                      Contact Us
                    </Link>
                  </Typography>
                </Grid>
                  <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary" align="center" >
                    Powered By{' '}
                    
                    <Link
                      href="https://insigntechsolutions.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                    >
                       Insign Tech Solutions 
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                    24/1701, KC Arcade, Near TV Centre, Csez P.O, Kakkanad, Ernakulam – 682037.
                    </Typography>
                </Grid>
                
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </AuthWrapper1>
  );
};

export default Login;
