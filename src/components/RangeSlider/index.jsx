import { Slider, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";

function RangeSlider() {
  const [range, setRange] = useState([30000, 60000]);
  const onChange = (event, val) => {
    setRange(val);
  };

  return (
    <Stack width="100%" spacing={1}>
      <Stack direction={"row"} justifyContent="space-between">
        <Typography>
          Min:{" "}
          {Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
          }).format(range[0])}
        </Typography>

        <Typography>
          Max:{" "}
          {Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR",
          }).format(range[1])}
        </Typography>
      </Stack>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        step={1000}
        min={9000}
        max={80000}
        onChange={onChange}
        disableSwap
        value={range}
        valueLabelDisplay="off"
      />
    </Stack>
  );
}

export default RangeSlider;
