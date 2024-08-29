/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { BooleanState } from "../../types/utils";
import { bikeBrands, bikeModels, ccOptions } from "../../constants";
import FormProvider from "../../components/react-hook-form/hook-form-controller";
import { RHFSelect, RHFTextField } from "../../components/react-hook-form";
import { createBikeValidation } from "./validation";
import { IBike } from "../../types/bike";
import { useCreateBikeMutation } from "../../redux/reducers/bike/bikeApi";
import CustomButton from "../../components/common-button";

interface AddProductProps {
  dialog: BooleanState;
}

const CreateBikeDialog: React.FC<AddProductProps> = ({ dialog }) => {
  const methods = useForm<IBike>({
    resolver: zodResolver(createBikeValidation),
  });

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = methods;

  const selectedBrand = watch("brand");
  const images = watch("images");

  console.log("images", images);

  const [createBike, { isLoading }] = useCreateBikeMutation();

  const modelsForSelectedBrand = selectedBrand ? bikeModels[selectedBrand] : [];

  console.log("errors", errors);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images" as never,
  });

  useEffect(() => {
    if (fields.length === 0) {
      append("");
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = await createBike(data).unwrap();
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
        <DialogTitle>Create BIke</DialogTitle>
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
            <RHFSelect name="cc" label="CC" type="number" options={ccOptions} />
            <RHFTextField name="year" label="Year" type="number" />

            <RHFTextField
              name="description"
              label="Description"
              className="md:col-span-2"
              multiline
              rows={3}
            />

            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex items-center gap-2 md:col-span-2"
              >
                <RHFTextField
                  name={`images.${index}`}
                  label={`Image URL ${index + 1}`}
                  fullWidth
                />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              </div>
            ))}

            <CustomButton onClick={() => append("")} title="Add Image URL" />
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
              title="Create Bike"
            />
          </DialogActions>
        </div>
      </FormProvider>
    </Dialog>
  );
};

export default CreateBikeDialog;
