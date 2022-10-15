import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Header = () => {
  return (
    <AppBar position="static" style={{ background: '#59b7ff' }}>
      <Container maxWidth="xl">
        <Toolbar  >
          <AppShortcutIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
          <Typography
            variant="h6"
            noWrap
            //component="a"
            href="/"
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              flexGrow: 1              
            }}
          >
            Mobile Ecommerce
          </Typography>
          <AppShortcutIcon sx={{ display: { xs: 'none', md: 'none' }, mr: 1, color: 'black' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              justifyContent: "space-between", 
            }}
          >
            Mobile Ecommerce
          </Typography>
<Box>
            <StyledBadge badgeContent={4} color="warning" sx={{color:'black'}} >
              <ShoppingCartIcon />
            </StyledBadge>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
