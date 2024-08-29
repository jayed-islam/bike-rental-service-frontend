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
  Button,
  CircularProgress,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetAllRentalsForUserQuery } from "../../../redux/reducers/rental/rentalApi";
import NoDataFound from "../../../components/no-data/no-data-found";
const MyRentalsPage = () => {
  const [activeTab, setActiveTab] = useState<"paid" | "unpaid">("unpaid");
  const navigate = useNavigate();

  const { data, isLoading } = useGetAllRentalsForUserQuery({
    isReturned: activeTab === "paid",
  });

  // Handle tab change
  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: "paid" | "unpaid"
  ) => {
    setActiveTab(newValue);
  };

  // Handle payment redirection
  const handlePay = (rentalId: string) => {
    navigate(`/payment/${rentalId}`);
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
          {isLoading ? (
            <CircularProgress />
          ) : data && data.data.length === 0 ? (
            <NoDataFound />
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Bike Name</TableCell>
                    <TableCell>Start Time</TableCell>
                    <TableCell>Return Time</TableCell>
                    <TableCell>Total Cost</TableCell>
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
                      {activeTab === "unpaid" && (
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handlePay(rental._id)}
                          >
                            Pay
                          </Button>
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
