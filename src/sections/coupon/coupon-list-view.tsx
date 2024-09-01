import React from "react";
import { useGetAllCouponsQuery } from "../../redux/reducers/coupon/couponApi";
import CustomButton from "../../components/common-button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import CreateCouponDialog from "./coupon-create-dialog";
import useBoolean from "../../hooks/use-boolean";
import CouponRow from "./coupon-row";

const CouponListView: React.FC = () => {
  const { data, isLoading, error } = useGetAllCouponsQuery();

  const dialog = useBoolean();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching coupons</div>;

  const coupons = data?.data || [];

  return (
    <>
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Manage Coupons
        </Typography>
        <CustomButton
          title="Create Coupon"
          onClick={dialog.setTrue}
          className="mb-4"
        />
      </Box>
      {coupons.length === 0 ? (
        <Alert severity="info">No coupons available</Alert>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell>Discount Amount</TableCell>
                <TableCell>Discount Type</TableCell>
                <TableCell>Expiration Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coupons.map((coupon) => (
                <CouponRow coupon={coupon} key={coupon.code} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <CreateCouponDialog dialog={dialog} />
    </>
  );
};

export default CouponListView;
