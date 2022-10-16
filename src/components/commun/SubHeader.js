import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SubHeader = ({ title }) => {
  return (
    <AppBar position="static" style={{ background: '#59b7ff' }}>
      <Container maxWidth="xl">
        <Toolbar style={{ minHeight: '15px' }} >
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              flexGrow: 1,
              justifyContent: 'center'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default SubHeader;
