import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../store/authSlice';

const drawerWidth = 240;

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Awesome Site
      </Typography>
      <Divider />
      <List>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </List>
    </Box>
  );

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }

  return (
    <Box 
      sx={{ display: 'flex' }}>
      <AppBar 
        component='nav' 
        position='relative'
        color='transparent'
        elevation={2}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Awesome Game Name
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button> <Link to='/' style={{textDecoration: 'none'}}> <Typography color='white'>Home</Typography> </Link> </Button>

            {user ? 
            (<>
              <Button onClick={onLogout}> Logout </Button>
            </>) : 
            (<>
              <Button> <Link to='/login' style={{textDecoration: 'none'}}> <Typography color='white'>Login</Typography> </Link> </Button>
              <Button> <Link to='/register' style={{textDecoration: 'none'}}> <Typography color='white'>Register</Typography> </Link> </Button>
            </>)}
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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
      </Box>
    </Box>
  );
}