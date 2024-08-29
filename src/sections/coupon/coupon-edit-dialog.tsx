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
import toast from "react-hot-toast";
import { BooleanState } from "../../types/utils";
import FormProvider from "../../components/react-hook-form/hook-form-controller";
import { RHFTextField, RHFSelect } from "../../components/react-hook-form";
import { ICoupon } from "../../types/coupon";
import { useUpdateCouponMutation } from "../../redux/reducers/coupon/couponApi"; // Adjust the path as necessary
import CustomButton from "../../components/common-button";
import { createCouponValidation } from "./validation"; // Use validation schema for update as well

interface UpdateCouponDialogProps {
  dialog: BooleanState;
  coupon: ICoupon;
}

const UpdateCouponDialog: React.FC<UpdateCouponDialogProps> = ({
  dialog,
  coupon,
}) => {
  const methods = useForm<ICoupon>({
    resolver: zodResolver(createCouponValidation),
    defaultValues: coupon || {
      code: "",
      discountAmount: 0,
      discountType: "percentage",
      expirationDate: "",
      isActive: true,
    },
  });

  const {
    handleSubmit,
    formState: { errors, dirtyFields },
  } = methods;

  const [updateCoupon, { isLoading }] = useUpdateCouponMutation();

  const onSubmit = handleSubmit(async (data) => {
    const changedFields: Partial<ICoupon> = Object.keys(dirtyFields).reduce(
      (acc, fieldName) => {
        const key = fieldName as keyof ICoupon;
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const value = data[key];
          if (value !== undefined) {
            acc[key] = value as any;
          }
        }
        return acc;
      },
      {} as Partial<ICoupon>
    );

    try {
      if (coupon) {
        const res = await updateCoupon({
          update: changedFields,
          code: coupon.code,
        }).unwrap();
        if (res.success) {
          toast.success(res.message);
          dialog.setFalse();
        } else {
          toast.error(res.message);
        }
      } else {
        toast.error("Coupon data is missing.");
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
        <DialogTitle>Update Coupon</DialogTitle>
        <DialogContent className="space-y-4">
          <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
            <RHFTextField name="code" label="Coupon Code" fullWidth />

            <RHFTextField
              name="discountAmount"
              label="Discount Amount"
              type="number"
              fullWidth
            />

            <RHFSelect
              name="discountType"
              label="Discount Type"
              options={[
                { value: "percentage", label: "Percentage" },
                { value: "fixed", label: "Fixed Amount" },
              ]}
            />

            <RHFTextField
              name="expirationDate"
              type="date"
              label="Expiration Date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <RHFSelect
              name="isActive"
              label="Active"
              options={[
                { value: "true", label: "Yes" },
                { value: "false", label: "No" },
              ]}
              error={!!errors.isActive}
              helperText={errors.isActive?.message}
            />
          </div>
        </DialogContent>
        <div className="px-5 pb-5">
          <DialogActions>
            <Button
              variant="outlined"
              color="warning"
              onClick={dialog.setFalse}
            >
              Cancel
            </Button>
            <CustomButton
              type="submit"
              loading={isLoading}
              title="Update Coupon"
            />
          </DialogActions>
        </div>
      </FormProvider>
    </Dialog>
  );
};

export default UpdateCouponDialog;
