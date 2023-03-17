import { Slider, Stack, Switch, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";

function RangeSlider() {
  const [range, setRange] = useState([30000, 60000]);
  const onChange = (event, val) => {
    setRange(val);
  };
  const [isPrice, setIsPrice] = useState(true);

  return (
    <Stack width="100%" spacing={1}>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography>
          Min:{" "}
          {Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(range[0])}
        </Typography>

        <Stack direction="row" alignItems={"center"}>
          <Typography>Price</Typography>
          <Switch
            checked={isPrice}
            onChange={(event) => {
              setIsPrice(event.target.checked);
              setRange(event.target.checked ? [30000, 60000] : [500, 1200]);
            }}
          />
          <Typography>Finance</Typography>
        </Stack>

        <Typography>
          Max:{" "}
          {Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(range[1])}
        </Typography>
      </Stack>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        step={isPrice ? 1000 : 25}
        min={isPrice ? 3000 : 150}
        max={isPrice ? 80000 : 1575}
        onChange={onChange}
        disableSwap
        value={range}
        valueLabelDisplay="off"
      />
    </Stack>
  );
}

export default RangeSlider;
