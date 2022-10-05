import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';



export default function Footer() {
  return (
    <React.Fragment>
      <AppBar color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
			<Typography>Hola</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
