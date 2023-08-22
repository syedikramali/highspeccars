import toPound from "@/utility/toPound";
import { Slider, Stack, Switch, Typography } from "@mui/material";
import { useEffect } from "react";

function RangeSlider({ setValue, value = {}, min, max }) {
  useEffect(() => {
    if (!value.min && !value.max) {
      setValue({
        type: "price",
        min: min("price"),
        max: max("price"),
      });
    }
  }, [value]);

  return (
    <Stack width="100%" spacing={1}>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Typography>
          Min: {toPound(value.min)} {value.type === "finance" && "p/mo"}
        </Typography>

        <Stack direction="row" alignItems={"center"}>
          <Typography>Price</Typography>
          <Switch
            checked={value.type === "finance"}
            onChange={(event) => {
              setValue({
                type: event.target.checked ? "finance" : "price",
                min: min(event.target.checked ? "finance" : "price"),
                max: max(event.target.checked ? "finance" : "price"),
              });
            }}
          />
          <Typography>Finance</Typography>
        </Stack>

        <Typography>
          Max: {toPound(value.max)} {value.type === "finance" && "p/mo"}
        </Typography>
      </Stack>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        step={value.type === "price" ? 1000 : 25}
        min={min(value.type)}
        max={max(value.type)}
        onChange={(event, val) => {
          setValue({
            ...value,
            min: val[0],
            max: val[1],
          });
        }}
        disableSwap
        value={[value.min, value.max]}
        valueLabelDisplay="off"
      />
    </Stack>
  );
}

export default RangeSlider;
