import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import ChartDolar from './ChartDolar';
import Indicador from './Indicador';
import Orders from './Orders';

import cityPurple from '../assets/cityPurple.jpg';
import technology from '../assets/technology.jpg';
import ChartIPCA from './ChartIPCA';
import ChartSelicMeta from './ChartSelicMeta';
import BarChartIPCA from './BarChartIPCA';



/*sx={{
  backgroundColor: (theme) =>
    theme.palette.mode === 'dark'
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
}} */


const lookPaper = {
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(35px)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 0 80px rgba(0, 0, 0, 0.25)',
                    padding: '30px 30px 30px 30px',
                    overflow: 'hidden',
                  };

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
   backgroundColor: '#9900AB',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: '#17021A',
      color: '#FFFFFF',
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="#FFFFFF"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} onClick={toggleDrawer}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
         
        </Drawer>
        <Box
          component="main" 
          sx={{
            backgroundImage: `url(${technology})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={4} lg={3}>
              <Paper
                  sx={lookPaper}
                >
                  <Indicador title= "Dólar Comercial" value="R$ 5,13" color="#3BAB3C"/>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={lookPaper}
                >
                  <Indicador title="IPCA" value="0,54%" color="#D20E2A"/>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={lookPaper}
                >
                  <Indicador title="Meta Selic" value="10,75%" color="#D20E2A"/>
                </Paper>
              </Grid>




              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={lookPaper}
                >
                  <ChartDolar />
                </Paper>
              </Grid>
                          

              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={lookPaper}
                >
                  <BarChartIPCA />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
             


                  <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={lookPaper}
                >
                  <ChartSelicMeta />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              

              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={lookPaper}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}