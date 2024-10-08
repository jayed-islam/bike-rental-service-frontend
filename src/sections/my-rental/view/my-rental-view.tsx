import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetAllRentalsForUserQuery } from "../../../redux/reducers/rental/rentalApi";
import NoDataFound from "../../../components/no-data/no-data-found";
import { paths } from "../../../layouts/paths";
const MyRentalsPage = () => {
  const [activeTab, setActiveTab] = useState<"paid" | "unpaid">("unpaid");
  const navigate = useNavigate();

  const { data, isFetching } = useGetAllRentalsForUserQuery({
    status: activeTab,
  });

  // Handle tab change
  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: "paid" | "unpaid"
  ) => {
    setActiveTab(newValue);
  };

  // Handle payment redirection
  const handlePay = (bikeId: string, bookingId: string) => {
    navigate(
      `${paths.payment}?id=${bikeId}&bookingId=${bookingId}&isFromUserPanel=yes`
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Card>
        <h2 className="p-5 text-xl font-semibold">My Rentals</h2>

        <div className="px-5">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="rentals tabs"
          >
            <Tab label="Unpaid" value="unpaid" />
            <Tab label="Paid" value="paid" />
          </Tabs>
        </div>

        <Box sx={{ marginTop: 2 }}>
          {isFetching ? (
            <CircularProgress />
          ) : data && data.data.length === 0 ? (
            <NoDataFound message="no unpaid rentals found" />
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Bike Name</TableCell>
                    <TableCell>Start Time</TableCell>
                    <TableCell>Return Time</TableCell>
                    <TableCell>Total Cost</TableCell>
                    <TableCell>Status</TableCell>
                    {activeTab === "unpaid" && <TableCell>Action</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data.map((rental, index) => (
                    <TableRow key={index}>
                      <TableCell>{rental.bikeId.name}</TableCell>
                      <TableCell>
                        {new Date(rental.startTime).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {rental.returnTime
                          ? new Date(rental.returnTime).toLocaleString()
                          : "N/A"}
                      </TableCell>
                      <TableCell>{rental.totalCost}</TableCell>
                      <TableCell>{rental.status}</TableCell>
                      {activeTab === "unpaid" && (
                        <TableCell>
                          <button
                            className="px-3 py-2 bg-sky-800 hover:bg-sky-900 rounded text-white"
                            onClick={() =>
                              handlePay(rental.bikeId._id!, rental._id)
                            }
                          >
                            Pay
                          </button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default MyRentalsPage;
