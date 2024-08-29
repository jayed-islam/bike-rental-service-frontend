/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";
import { BooleanState } from "../../types/utils";
import FormProvider from "../../components/react-hook-form/hook-form-controller";
import { RHFTextField } from "../../components/react-hook-form";
import { AccountFromData, accountSchema } from "./validation";
import { useUpdateUserProfileMutation } from "../../redux/reducers/auth/authApi";

interface AccountEditDialogProps {
  dialog: BooleanState;
  user: AccountFromData;
}

const AccountEditDialog: React.FC<AccountEditDialogProps> = ({
  dialog,
  user,
}) => {
  const methods = useForm<AccountFromData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      address: user.address,
      name: user.name,
      phone: user.phone,
      email: user.email,
    },
  });

  const { handleSubmit, formState } = methods;
  const { isDirty, dirtyFields } = formState;

  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();

  const onSubmit = handleSubmit(async (data) => {
    // Filter out fields that haven't changed
    const updatedData = Object.keys(data).reduce((acc, key) => {
      if (dirtyFields[key as keyof AccountFromData]) {
        acc[key as keyof AccountFromData] = data[key as keyof AccountFromData];
      }
      return acc;
    }, {} as Partial<AccountFromData>);

    try {
      const res = await updateProfile(updatedData).unwrap();
      if (res.success) {
        toast.success(res.message);
        dialog.setFalse();
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }
  });

  return (
    <Dialog
      open={dialog.value}
      onClose={dialog.setFalse}
      maxWidth="sm"
      fullWidth
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent className="space-y-4">
          <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
            <RHFTextField
              name="name"
              label="Name"
              fullWidth
              className="md:col-span-2"
            />

            <RHFTextField name="email" label="Email" type="email" disabled />
            <RHFTextField name="phone" label="Phone" />
            <RHFTextField name="address" label="Address" />
          </div>
        </DialogContent>
        <div className="px-5 pb-5">
          <DialogActions>
            <Button
              variant="contained"
              color="warning"
              onClick={dialog.setFalse}
            >
              Cancel
            </Button>
            <LoadingButton
              type="submit"
              variant="contained"
              color="success"
              loading={isLoading}
              disabled={!isDirty}
            >
              Update
            </LoadingButton>
          </DialogActions>
        </div>
      </FormProvider>
    </Dialog>
  );
};

export default AccountEditDialog;
