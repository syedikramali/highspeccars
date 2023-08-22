import { CONTACT } from "@/constants";
import useScreenWidth from "@/hooks/useScreenWidth";
import { Call, CallOutlined, Email } from "@mui/icons-material";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { map } from "lodash";
import React, { Children, Fragment } from "react";

function About() {
  const { isSm } = useScreenWidth();
  return (
    <div>
      <Typography my={2} variant="h3" align="center">
        About Us
      </Typography>
      <Box
        sx={{
          backgroundImage:
            "url('https://www.silsoeprestigemotors.co.uk/img-src/_themev2-silsoeprestigemotors-3983/theme/page-hdr__bg.1666162652.jpg')",
          backgroundPosition: "center",
        }}
      >
        <Typography
          color="#fff"
          align="center"
          sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          variant={isSm ? "h4" : "h3"}
          py={isSm ? 10 : 20}
          fontWeight="bolder"
        >
          High Spec Cars
        </Typography>
      </Box>

      <Grid container spacing={5} px={2} py={4}>
        <Grid item md={8} xs={12}>
          {Children.toArray(
            map(
              [
                {
                  label: "180-Point Inspection:",
                  value: `All our vehicles undergo a comprehensive
              180-point inspection before they are made available for sale. This
              ensures that each car meets our high standards for safety,
              reliability, and performance.`,
                },
                {
                  label: "MOT:",
                  value: `We provide a valid MOT certificate with every vehicle that we
              sell, so you can rest assured that your car is roadworthy and legal
              to drive.`,
                },
                {
                  label: "Service:",
                  value: `We offer a complete service for all of our vehicles, so you
              can drive away with peace of mind knowing that your car has been
              fully checked and serviced by our experienced technicians.`,
                },
                {
                  label: "Full Valet:",
                  value: `Our vehicles undergo a full valet before they are
              delivered to our customers, so you can enjoy that new car feeling
              from the moment you get behind the wheel.`,
                },
                {
                  label: "Financing:",
                  value: `We offer competitive financing options to help you get
              the car you want at a price you can afford. Our team will work with
              you to find the best financing solution for your needs, so you can
              drive away in your dream car today.`,
                },
              ],
              ({ label, value }) => {
                return (
                  <Fragment>
                    <Typography variant="h6" color="text.secondary">
                      {label}
                    </Typography>
                    <Typography variant="body1" pt={0.5} mb={3}>
                      {value}
                    </Typography>
                  </Fragment>
                );
              }
            )
          )}
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper sx={{ p: 2, borderTop: "3px solid #E34234" }}>
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <CallOutlined color="error" />
              <Typography variant="h5" fontWeight={"bolder"}>
                Get In Touch
              </Typography>
            </Stack>
            <Typography my={2} color="text.secondary">
              Why not contact us directly?
            </Typography>
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <Call color="error" />
              <Typography
                fontWeight={"bolder"}
                color="text.secondary"
                variant="h6"
              >
                {CONTACT.mobile}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <Email color="error" />
              <Typography
                fontWeight={"bolder"}
                color="text.secondary"
                variant="h6"
              >
                {CONTACT.email}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
