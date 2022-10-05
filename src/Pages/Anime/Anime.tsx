import { Box, Typography } from "@mui/material";
import React from "react";
export interface AnimeInterface {}

const Anime: React.FC<AnimeInterface> = () => {
  return (
    <Box className="Anime" sx={{ mt: 10 }}>
      <Typography>Anime</Typography>
    </Box>
  );
};

export default Anime;
