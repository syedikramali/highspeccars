import { MenuItem, Select } from "@mui/material";
import { map } from "lodash";
import React, { Children, useState } from "react";

function SelectInput({ options, ...props }) {
  const [value, setValue] = useState("all");

  return (
    <Select
      variant="outlined"
      fullWidth
      value={value}
      onChange={(event) => setValue(event.target.value)}
      sx={{
        "& fieldset": {
          borderRadius: 4,
        },
      }}
      {...props}
    >
      {Children.toArray(
        map(options, ({ label, value: val }) => {
          return <MenuItem value={val}>{label}</MenuItem>;
        })
      )}
    </Select>
  );
}

export default SelectInput;
