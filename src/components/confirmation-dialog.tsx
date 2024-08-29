import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { BooleanState } from "../types/utils";
import CustomButton from "./common-button";

interface DeleteConfirmationDialogProps {
  dialog: BooleanState;
  title?: string;
  message?: string;
  isLoading?: boolean;
  onConfirm: () => void;
}

const ConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  title = "Confirm Deletion",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  dialog,
  isLoading = false,
  onConfirm,
}) => {
  return (
    <Dialog
      open={dialog.value}
      onClose={dialog.setFalse}
      maxWidth="xs"
      fullWidth
    >
      <div className="p-3">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialog.setFalse} color="inherit" variant="outlined">
            Cancel
          </Button>
          <CustomButton onClick={onConfirm} loading={isLoading} title="Yes" />
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default ConfirmationDialog;
