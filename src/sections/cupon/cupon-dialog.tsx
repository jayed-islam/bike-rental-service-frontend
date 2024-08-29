import React from "react";
import { Box, Dialog, Typography } from "@mui/material";
import CustomButton from "../../components/common-button";
import toast from "react-hot-toast";
interface CouponModalProps {
  isVisible: boolean;
  couponCode: string;
  onClose: () => void;
}

const CouponModal: React.FC<CouponModalProps> = ({
  isVisible,
  couponCode,
  onClose,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    toast.success("Discount coupon cpied successfully!");
    onClose();
  };

  return (
    <Dialog open={isVisible} onClose={onClose}>
      <Box
        className="modal-content"
        sx={{
          bgcolor: "background.paper",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" component="h2">
          Congratulations! You've Won a Discount
        </Typography>
        <Typography variant="body1" sx={{ margin: "20px 0" }}>
          Your Coupon Code: <strong>DISCOUNT{couponCode}%</strong>
        </Typography>

        <CustomButton
          variant="outline"
          className="mr-5"
          title="Copy"
          onClick={handleCopy}
        />
        <CustomButton className="mt-5" title="Close" onClick={onClose} />
      </Box>
    </Dialog>
  );
};

export default CouponModal;
