import RangeSlider from "@/components/RangeSlider";
import SelectInput from "@/components/SelectInput";
import { AppBar, Box, Grid, Pagination, Stack, Toolbar } from "@mui/material";
import React from "react";

function search() {
  return (
    <Box p={3}>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <Stack spacing={2}>
            <SelectInput
              size="small"
              options={[
                { label: "Any make (63)", value: "all" },
                { label: "Audi (8)", value: "6" },
                { label: "BMW (42)", value: "8" },
                { label: "Land Rover (2)", value: "41" },
                { label: "Mercedes-Benz (7)", value: "224" },
                { label: "MINI (1)", value: "51" },
                { label: "Volkswagen (2)", value: "84" },
                { label: "Volvo (1)", value: "85" },
              ]}
            />
            <SelectInput
              size="small"
              options={[
                { label: "Any model (7)", value: "all" },
                { label: "C-Class (2)", value: "19254" },
                { label: "Cla (1)", value: "3677" },
                { label: "E-Class (2)", value: "1234" },
                { label: "S-Class (2)", value: "1265" },
              ]}
            />
          </Stack>
        </Grid>
        <Grid item md={10}>
          <AppBar position="static" sx={{ borderRadius: 3, py: 1 }}>
            <Toolbar>
              <RangeSlider />
            </Toolbar>
          </AppBar>

          <Box align='right'>
            <Pagination
              count={10}
              color="primary"
              size="large"
              sx={{ mt: 4 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default search;
