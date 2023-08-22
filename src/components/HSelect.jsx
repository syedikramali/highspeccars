import useThemeMode from "@/hooks/useThemeMode";
import { Box, MenuItem, TextField } from "@mui/material";
import { Field } from "formik";
import { uniqueId } from "lodash";
import { Children } from "react";

export default function HSelect({
  name,
  boxProps,
  normal,
  selectProps,
  placeholder,
  options,
  ...props
}) {
  const { isLightMode } = useThemeMode();
  return (
    <Box {...boxProps} width="100%">
      <Field name={name}>
        {({ field, form: { touched, errors }, meta }) => (
          <TextField
            variant={"outlined"}
            {...field}
            {...props}
            InputLabelProps={{ shrink: true }}
            select
            sx={{
              "& .MuiInputBase-input": {
                color: !field.value ? "text.disabled" : "inherit",
              },
            }}
            size="small"
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: { borderRadius: "8px" },
                },
                disablePortal: true,
              },
              displayEmpty: true,
              ...selectProps,
            }}
            fullWidth
            helperText={(meta.touched && meta.error) || ""}
            error={meta.touched && meta.error}
          >
            {placeholder && (
              <MenuItem value="" disabled>
                {placeholder}
              </MenuItem>
            )}
            {options &&
              Children.toArray(
                options.map((item, index) => {
                  return (
                    <MenuItem key={uniqueId()} value={item}>
                      {item}
                    </MenuItem>
                  );
                })
              )}
          </TextField>
        )}
      </Field>
    </Box>
  );
}
