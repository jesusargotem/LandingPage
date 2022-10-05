import { Box, Typography } from '@mui/material';
import React from 'react';
export interface SeriesInterface {}

const Series : React.FC<SeriesInterface> = () => {
	return (
		<Box className="Series" sx={{ mt: 10 }}>
		  <Typography>Series</Typography>
		</Box>
	  );
};

export default Series;
