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
import { ProductFormData, productFormSchema } from "./validation";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";
import { BooleanState } from "../../types/utils";
import { IProduct } from "../../types/product";
import { useUpdateProductMutation } from "../../redux/reducers/product/productApi";
import { bikeBrands, bikeModels, ccOptions } from "../../constants";
import FormProvider from "../../components/react-hook-form/hook-form-controller";
import { RHFSelect, RHFTextField } from "../../components/react-hook-form";

interface AddProductProps {
  dialog: BooleanState;
  initialValues: IProduct;
}

const UpdateProductDialog: React.FC<AddProductProps> = ({
  dialog,
  initialValues,
}) => {
  const methods = useForm<Partial<ProductFormData>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: initialValues,
  });

  const {
    handleSubmit,
    watch,
    formState: { isDirty, dirtyFields },
  } = methods;

  const selectedBrand = watch("brand");

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const modelsForSelectedBrand = selectedBrand ? bikeModels[selectedBrand] : [];

  const onSubmit = handleSubmit(async (data: Partial<IProduct>) => {
    console.log(data);
    try {
      const changedFields: Partial<IProduct> = Object.keys(dirtyFields).reduce(
        (acc, fieldName) => {
          const key = fieldName as keyof IProduct;
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key];
            if (value !== undefined) {
              acc[key] = value as any;
            }
          }
          return acc;
        },
        {} as Partial<IProduct>
      );

      console.log(changedFields);

      const res = await updateProduct({
        id: initialValues._id,
        product: changedFields,
      }).unwrap();
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
  });

  return (
    <Dialog
      open={dialog.value}
      onClose={dialog.setFalse}
      maxWidth="sm"
      fullWidth
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Create Product</DialogTitle>
        <DialogContent className="space-y-4">
          <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
            <RHFTextField
              name="name"
              label="Name"
              fullWidth
              className="md:col-span-2"
            />

            <RHFSelect name="brand" label="Brand" options={bikeBrands} />
            <RHFSelect
              name="model"
              label="Model"
              options={modelsForSelectedBrand}
              disabled={!selectedBrand}
            />

            <RHFTextField
              name="pricePerHour"
              label="Price per hour"
              type="number"
            />
            <RHFSelect name="cc" label="CC" options={ccOptions} />
            <RHFTextField
              name="description"
              label="Description"
              className="md:col-span-2"
              multiline
              rows={3}
            />
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
              Update Product
            </LoadingButton>
          </DialogActions>
        </div>
      </FormProvider>
    </Dialog>
  );
};

export default UpdateProductDialog;
