import { Box, Typography } from "@mui/material";

interface Props {
  message?: string;
}

const NoDataFound = ({ message }: Props) => {
  return (
    <Box sx={{ textAlign: "center", padding: 3 }}>
      <Typography variant="h6" color="textSecondary">
        {message || "No data available"}
      </Typography>
    </Box>
  );
};

export default NoDataFound;
