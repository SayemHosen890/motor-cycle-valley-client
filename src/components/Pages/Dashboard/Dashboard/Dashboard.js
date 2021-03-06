import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Button from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Button, CircularProgress } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddBike from '../../AddCar/AddBike';
import Order from '../../Order/Order';
import Review from '../../Reviews/Review';
import PrivateAdmin from '../../../PrivateRoute/PrivateAdmin';
import ManageAllOrder from '../../ManageAllOrder/ManageAllOrder';
import ManageAllBike from '../../ManageAllBike/ManageAllBike';
import useAuth from '../../../../hooks/useAuth';
// import { NavLink } from 'react-router-dom';
// import { ListItemButton } from '@mui/material';

const drawerWidth = 240;

function Dashboard(props) {
  const { admin, logOut } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to={`${url}/makeAdmin`}><Button variant="text">Make Admin</Button></Link>
      <br />
      <Link to={`${url}/addbike`}><Button variant="text">AddBike</Button></Link>
      <br />
      <Link to={`${url}/order`}><Button variant="text">My Order</Button></Link>
      <br />
      <Link to={`${url}/review`}><Button variant="text">Review</Button></Link>
      <br />
      <Link to={`${url}/manageallorder`}><Button variant="text">Manage All Order</Button></Link>
      <Link to={`${url}/manageallbike`}><Button variant="text">Manage All Bike</Button></Link>
      <br />
      <Button onClick={logOut}>LogOut</Button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>

          <Route path={path}>
            <Order></Order>
          </Route>
          <Route path={path}>
            <Review></Review>
          </Route>
          {!admin ? <CircularProgress /> : <>
            <PrivateAdmin path={path}>
              <MakeAdmin></MakeAdmin>
            </PrivateAdmin>
            <PrivateAdmin path={path}>
              <ManageAllOrder></ManageAllOrder>
            </PrivateAdmin>
            <PrivateAdmin path={path}>
              <ManageAllBike></ManageAllBike>
            </PrivateAdmin>
            <PrivateAdmin path={path}>
              <AddBike></AddBike>
            </PrivateAdmin>
          </>}
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

