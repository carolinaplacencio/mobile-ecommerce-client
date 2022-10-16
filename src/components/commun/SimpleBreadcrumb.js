import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

export default function SimpleBreadcrumb() {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Product list
        </Link>
        <Typography color="text.primary">Details</Typography>
      </Breadcrumbs>
    </Box>
  );
}
