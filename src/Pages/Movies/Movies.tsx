import { Box, Typography } from '@mui/material';
import React from 'react';
export interface MoviesInterface {}

const Movies : React.FC<MoviesInterface> = () => {
	return (
		<Box className="Movies" sx={{ mt: 10 }}>
		  <Typography>Movies</Typography>
		</Box>
	  );
};

export default Movies;
