/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import { IUser } from "../../types/user";
import { useUpdateUserRoleMutation } from "../../redux/reducers/user/userApi";
import toast from "react-hot-toast";
import { BooleanState } from "../../types/utils";
import CustomButton from "../../components/common-button";

interface UpdateUserRoleDialogProps {
  dialog: BooleanState;
  user: IUser;
}

const UpdateUserRoleDialog: React.FC<UpdateUserRoleDialogProps> = ({
  dialog,
  user,
}) => {
  const { control, handleSubmit } = useForm<{ role: "ADMIN" | "USER" }>({
    defaultValues: {
      role: user.role as "ADMIN" | "USER",
    },
  });

  const [updateUserRole, { isLoading }] = useUpdateUserRoleMutation();

  const onSubmit = async (data: { role: "ADMIN" | "USER" }) => {
    try {
      const res = await updateUserRole({
        email: user.email,
        role: data.role,
      }).unwrap();
      if (res.success) {
        toast.success(res.message);
        dialog.setFalse();
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.error("Failed to update user role", error);
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
      <DialogTitle>Update User Role</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Role">
                  <MenuItem value="USER">User</MenuItem>
                  <MenuItem value="ADMIN">Admin</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialog.setFalse} color="warning">
            Cancel
          </Button>
          <CustomButton type="submit" loading={isLoading} title="Update role" />
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UpdateUserRoleDialog;
