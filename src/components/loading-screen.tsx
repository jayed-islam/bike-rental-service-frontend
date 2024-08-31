import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const SplashScreen: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="background.default"
      color="text.primary"
      textAlign="center"
      px={2}
    >
      <CircularProgress size={60} thickness={4.5} />
      <Typography variant="h6" mt={3}>
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default SplashScreen;
