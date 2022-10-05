import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles/Home.scss";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <Box className="home" sx={{ mt: 10 }}>
      <Typography>Home</Typography>
    </Box>
  );
};

export default Home;
