import {
  BODY_STYLE_OPTIONS,
  COLORS_OPTIONS,
  DOORS_OPTIONS,
  FUEL_TYPE_OPTIONS,
  MAKE_OPTIONS,
  TRANSMISSION_OPTIONS,
} from "@/constants";
import { CurrencyPound } from "@mui/icons-material";
import { Grid, InputAdornment } from "@mui/material";
import HSelect from "../HSelect";
import HTextField from "../HTextField";
import engine from "./engine";

function CarForm({ models, isLoading }) {
  return (
    <Grid container rowSpacing={5} columnSpacing={3}>
      <Grid item xs={12}>
        <HTextField name="name" label="Name" placeholder="Enter Car Name" />
      </Grid>
      <Grid item xs={12}>
        <HTextField
          name="description"
          label="Description"
          placeholder="Enter Car Description"
          multiline
          minRows={2}
        />
      </Grid>
      <Grid item xs={12}>
        <HTextField
          name="summary"
          label="Summary"
          placeholder="Enter Car Summary"
          multiline
          minRows={2}
        />
      </Grid>
      <Grid item xs={3}>
        <HTextField
          name="price"
          label="Price"
          placeholder="Enter Car Price"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CurrencyPound color="disabled" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <HTextField
          name="finance"
          label="Finance"
          placeholder="Enter Car Finance"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CurrencyPound color="disabled" />
              </InputAdornment>
            ),
            endAdornment: <InputAdornment position="end">p/mo</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <HTextField
          name="year"
          label="Year"
          placeholder="Enter Car Manufacturing Year"
          type="number"
        />
      </Grid>
      <Grid item xs={3}>
        <HTextField
          name="mileage"
          label="Mileage"
          placeholder="Enter Car Mileage"
          type="number"
        />
      </Grid>
      <Grid item xs={3}>
        <HSelect
          options={MAKE_OPTIONS}
          name="make"
          label="Make"
          placeholder="Select make"
        />
      </Grid>

      <Grid item xs={3}>
        {isLoading ? (
          "Loading Models..."
        ) : (
          <HSelect
            disabled={isLoading}
            options={models}
            name="model"
            label="Model"
            placeholder="Select Car Model"
          />
        )}
      </Grid>
      <Grid item xs={3}>
        <HSelect
          options={BODY_STYLE_OPTIONS}
          name="bodyStyle"
          label="Body Style"
          placeholder="Select body style"
        />
      </Grid>
      <Grid item xs={3}>
        <HSelect
          options={DOORS_OPTIONS}
          name="doors"
          label="Doors"
          placeholder="Select doors"
        />
      </Grid>
      <Grid item xs={3}>
        <HSelect
          options={COLORS_OPTIONS}
          name="color"
          label="Color"
          placeholder="Select color"
        />
      </Grid>
      <Grid item xs={3}>
        <HSelect
          options={TRANSMISSION_OPTIONS}
          name="transmission"
          label="Transmission"
          placeholder="Select transmission"
        />
      </Grid>
      <Grid item xs={3}>
        <HSelect
          options={FUEL_TYPE_OPTIONS}
          name="fuelType"
          label="Fuel Type"
          placeholder="Select fuel type"
        />
      </Grid>
    </Grid>
  );
}

export default engine(CarForm);
