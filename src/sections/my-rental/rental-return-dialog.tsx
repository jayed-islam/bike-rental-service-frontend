/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Dialog, TextField, InputAdornment } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { BooleanState } from "../../types/utils";
import toast from "react-hot-toast";
import { useMakeBikeReturnMutation } from "../../redux/reducers/rental/rentalApi";

interface Props {
  dialog: BooleanState;
  id: string;
}

const RentalReturnedDialog = ({ dialog, id }: Props) => {
  const [endTime, setEndTime] = useState("");

  const [makeReturn, { isLoading }] = useMakeBikeReturnMutation();

  const handleMakeReturn = async () => {
    if (!endTime) {
      toast.error("Please set a end time");
      return;
    }
    try {
      const res = await makeReturn({ id, endTime }).unwrap();
      if (res.success) {
        toast.success(res.message);
        dialog.setFalse();
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message);
    }
  };
  return (
    <Dialog
      open={dialog.value}
      onClose={dialog.setFalse}
      maxWidth="xs"
      fullWidth
    >
      <div className="p-5 w-full">
        <h2 className="text-center font-bold text-lg">
          Return bike confirmation
        </h2>

        <div className="py-5 w-full max-w-[17rem] mx-auto">
          <p className="pb-3 text-sm font-semibold text-red-700">
            Click on right algned clock icon
          </p>
          <TextField
            label="End Time"
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
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
            <button
              onClick={handleMakeReturn}
              disabled={!endTime}
              className={`font-bold px-5 py-2 ${
                !endTime
                  ? "bg-gray-400 hover:bg-gray-500"
                  : "bg-sky-800 hover:bg-sky-900"
              } text-white`}
            >
              {isLoading ? "Loading" : "Make Return"}
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default RentalReturnedDialog;
