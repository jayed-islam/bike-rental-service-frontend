import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

type Props = TextFieldProps & {
  name: string;
  readOnly?: boolean;
};

const RHFDatePicker: React.FC<Props> = ({ name, label, disabled }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          label={label}
          //   value={field.value ? dayjs(field.value) : null}
          //   onChange={(date: Dayjs | null) => {
          //     field.onChange(date ? date.toISOString() : null);
          //   }}
          onChange={(date: Dayjs | null) =>
            field.onChange(date ? date.toDate() : null)
          }
          disabled={disabled}
          sx={{
            width: "100%",
          }}
        />
      )}
    />
  );
};

export default RHFDatePicker;
