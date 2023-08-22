import { Box, TextField } from "@mui/material";
import { Field } from "formik";

export default function HTextField({
  name,
  label,
  placeholder,
  boxProps,
  required,
  normal,
  ...props
}) {
  const RenderTextField = ({ field, meta }) => {
    return (
      <TextField
        {...{
          name,
          label,
          required,
          placeholder,
          size: "small",
          fullWidth: true,
          variant: "outlined",
          InputLabelProps: { shrink: true },
          error: meta?.touched && meta?.error,
          helperText: meta?.touched && meta?.error,
          ...field,
          ...props,
        }}
      />
    );
  };

  return (
    <Box {...boxProps} width="100%">
      {normal ? (
        <RenderTextField />
      ) : (
        <Field name={name}>{RenderTextField}</Field>
      )}
    </Box>
  );
}
