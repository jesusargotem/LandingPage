import { NovelCardList } from "@/Components";
import { Box, Typography } from "@mui/material";
import React from "react";

export interface LightNovelsInterface {}

const LightNovels: React.FC<LightNovelsInterface> = () => {
  return (
    <Box className="LightNovels" sx={{ mt: 10 }}>
      <Typography>Light Novels</Typography>
      <NovelCardList />
    </Box>
  );
};

export default LightNovels;
