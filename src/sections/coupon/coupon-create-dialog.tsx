/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useCreateCouponMutation } from "../../redux/reducers/coupon/couponApi";
import CustomButton from "../../components/common-button";
import { createCouponValidation } from "./validation";

interface CreateCouponDialogProps {
  dialog: BooleanState;
}

const CreateCouponDialog: React.FC<CreateCouponDialogProps> = ({ dialog }) => {
  const methods = useForm<ICoupon>({
    resolver: zodResolver(createCouponValidation),
  });

  const { handleSubmit } = methods;

  const [createCoupon, { isLoading }] = useCreateCouponMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await createCoupon(data).unwrap();
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
        <DialogTitle>Create Coupon</DialogTitle>
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
              title="Create Coupon"
            />
          </DialogActions>
        </div>
      </FormProvider>
    </Dialog>
  );
};

export default CreateCouponDialog;
