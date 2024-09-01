import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import { Edit } from "@mui/icons-material";
import AccountEditDialog from "../account-edit-dialog";
import useBoolean from "../../../hooks/use-boolean";

const profileImageUrl = "https://via.placeholder.com/150";

const AccountView = () => {
  // Access user data from the Redux store
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const dialog = useBoolean();

  const userData = {
    name: user?.name ?? "",
    phone: user?.phone ?? "",
    address: user?.address ?? "",
    email: user?.email ?? "",
  };

  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "51vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box>
        <h2 className="dark:text-white text-xl mb-7 font-semibold">
          Welcome, {user?.name}!
        </h2>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{ padding: 3, textAlign: "center" }}
              className="dark:bg-gray-800"
            >
              <Avatar
                alt={user?.name || "User Profile"}
                src={profileImageUrl}
                sx={{ width: 120, height: 120, margin: "0 auto" }}
              />
              <Typography
                variant="h6"
                sx={{ mt: 2 }}
                className="dark:text-gray-500"
              >
                {user?.name || "User Name"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper
              sx={{ padding: 3 }}
              className="dark:bg-gray-800 dark:text-gray-500"
            >
              <div className="flex items-center justify-between mb-5">
                <Typography variant="h6" gutterBottom>
                  User Details
                </Typography>
                <IconButton
                  onClick={dialog.setTrue}
                  sx={{
                    border: "1px solid gray",
                  }}
                >
                  <Edit />
                </IconButton>
              </div>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>Name:</strong> {user?.name || "Not Available"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>Email:</strong> {user?.email || "Not Available"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>Phone:</strong> {user?.phone || "Not Available"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <strong>Address:</strong> {user?.address || "Not Available"}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <AccountEditDialog dialog={dialog} user={userData} />
    </>
  );
};

export default AccountView;
