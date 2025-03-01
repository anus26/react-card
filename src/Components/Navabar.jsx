import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';


const Pages = ['home', 'product', 'contact', 'service'];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  let navigate = useNavigate()

  const handleOpenNavMenu = (Pages) => {
    setAnchorElNav(Pages.currentTarget);
  };
  const handleOpenUserMenu = (Pages) => {
    setAnchorElUser(Pages.currentTarget);
  };

  const handleCloseNavMenu = (Pages) => {
    setAnchorElNav(null);
    if (Pages == 'Home') {
      navigate('')
      return
    }
    navigate(`/${Pages}`)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"  >
      <Container maxWidth="xl"  className='bg-brown  rounded-full'>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
         
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              // color: 'bg-brown',
            
              textDecoration: 'none',
            }}
          
          >
            <h1 className='text-2xl font-bold text-white px-16 hover:text-cyan font-body'>B.M Collection</h1>
          </Typography>

          
         

          <Box  className=" flex  gap-6 text-white font-body      "
sx={{ flexGrow: 1, display: {  md: 'flex'  } }}>
            {Pages.map((Pages) => (
              <Link 
              className='group cursor-pointer text-white hover:text-cyan trasition-all duration-500'
              to={Pages} 
              key={Pages}
              onClick={() => handleCloseUserMenu(Pages)}
              sx={{ my: 2,  }}
              
              >
                {Pages}
                <div className='  max-auto bg-cyan  w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
              </Link>
            )
            
          )
          
        }
          </Box>
           
      
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
