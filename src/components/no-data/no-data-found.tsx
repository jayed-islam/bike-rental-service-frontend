import { Box, Typography } from "@mui/material";

const NoDataFound = () => {
  return (
    <Box sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h6" color="textSecondary">
        No data found
      </Typography>
    </Box>
  );
};

export default NoDataFound;
