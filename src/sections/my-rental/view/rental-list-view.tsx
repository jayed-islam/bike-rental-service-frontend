import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import NoDataFound from "../../../components/no-data/no-data-found";
import RentalRow from "./rental-row";
import { useGetAllRentalsQuery } from "../../../redux/reducers/rental/rentalApi";

const RentalListView: React.FC = () => {
  const { data, isLoading } = useGetAllRentalsQuery();

  return (
    <div>
      <h2 className="text-lg font-semibold pb-5">Rentals</h2>
      {isLoading ? (
        <CircularProgress />
      ) : data && data.data.length === 0 ? (
        <NoDataFound message="no rentals are available." />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Bike Name</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>Return Time</TableCell>
                <TableCell>Total Cost</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Make Return</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.map((rental, index) => (
                <RentalRow rental={rental} key={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default RentalListView;
