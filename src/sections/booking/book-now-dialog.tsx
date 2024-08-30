import { useState } from "react";
import { Button, Dialog, TextField, InputAdornment } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { BooleanState } from "../../types/utils";
import toast from "react-hot-toast";
import { paths } from "../../layouts/paths";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/common-button";

interface Props {
  dialog: BooleanState;
  bikeId: string;
}

const BookNowDialog = ({ dialog, bikeId }: Props) => {
  const [startTime, setStartTime] = useState("");
  const navigate = useNavigate();

  const handlePay = () => {
    if (!startTime) {
      toast.error("Please select a start time.");
      return;
    }
    console.log("Payment processed with start time:", startTime);
    dialog.setFalse();
    navigate(`${paths.payment}?id=${bikeId}&startTime=${startTime}`);
  };

  return (
    <Dialog
      open={dialog.value}
      onClose={dialog.setFalse}
      maxWidth="xs"
      fullWidth
    >
      <div className="p-5 w-full">
        <h2 className="text-center font-bold text-lg">Confirm Your Booking</h2>

        <div className="py-5 w-full max-w-[17rem] mx-auto">
          <p className="pb-3 text-sm font-semibold text-red-700">
            Click on right algned clock icon
          </p>
          <TextField
            label="Start Time"
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccessTimeIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
            className="mt-3"
            onClick={(e) =>
              (
                e.currentTarget.querySelector("input") as HTMLInputElement
              )?.focus()
            }
          />
          <div className="flex items-center justify-end gap-5 w-full mt-5">
            <Button
              variant="outlined"
              onClick={dialog.setFalse}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold"
            >
              Cancel
            </Button>
            <CustomButton
              onClick={handlePay}
              className={`font-bold ${
                !startTime ? "bg-gray-400 hover:bg-gray-500" : ""
              } text-white`}
              title="Pay"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default BookNowDialog;
