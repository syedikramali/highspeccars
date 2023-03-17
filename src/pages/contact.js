import { CONTACT } from "@/constants";
import { Call, Email, LocationOn } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

function contact() {
  return (
    <Fragment>
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
          variant="h3"
          py={10}
          fontWeight="bolder"
        >
          High Spec Cars
        </Typography>
      </Box>
      <Box px={3} py={5}>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12}>
            <Box>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=CP House Business Centre - LentaSpace, C, P House, Otterspool Way, Bushey, Watford WD25 8JJ, United Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:100%;width:100%;}",
                    }}
                  />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}",
                    }}
                  />
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
            <Paper sx={{ p: 2, borderTop: "3px solid #E34234" }}>
              <Typography variant={"h4"} fontWeight="bolder" mb={2}>
                Get In Touch
              </Typography>
              <Typography
                mb={1}
                variant="h5"
                fontWeight={"bolder"}
                color="error.main"
              >
                Contact
              </Typography>
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <Call color="error" />
                <Typography color="text.secondary" variant="h6">
                  {CONTACT.mobile}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <Email color="error" />
                <Typography color="text.secondary" variant="h6">
                  {CONTACT.email}
                </Typography>
              </Stack>

              <Typography
                mt={3}
                mb={1}
                variant="h5"
                fontWeight={"bolder"}
                color="error.main"
              >
                Address
              </Typography>
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <LocationOn color="error" />
                <Typography color="text.secondary" variant="h6">
                  {CONTACT.address}
                </Typography>
              </Stack>

              <Typography
                mt={3}
                mb={1}
                variant="h5"
                fontWeight={"bolder"}
                color="error.main"
              >
                Opening Hours
              </Typography>

              <table>
                <tbody>
                  <tr>
                    <td>
                      <Typography color="text.secondary" variant="h6" mr={4}>
                        Mon - Fri
                      </Typography>
                    </td>

                    <td align="right">
                      <Typography color="text.secondary" variant="h6">
                        9:00 am - 6:00 pm
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Typography color="text.secondary" variant="h6">
                        Saturday
                      </Typography>
                    </td>

                    <td align="right">
                      <Typography color="text.secondary" variant="h6">
                        10:00 am - 7:00 pm
                      </Typography>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Typography color="text.secondary" variant="h6">
                        Sunday
                      </Typography>
                    </td>

                    <td align="right">
                      <Typography color="text.secondary" variant="h6">
                        11:00 am - 7:00 pm
                      </Typography>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Container sx={{ textAlign: "center", pb: 5 }}>
        <Typography align="center" variant="h4" mb={5}>
          Drop us a message
        </Typography>
        <Stack spacing={5} px={20}>
          <TextField
            fullWidth
            label="Full Name"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            required
            label="Email"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            fullWidth
            required
            multiline
            label="Message"
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            rows={5}
          />
        </Stack>
        <Button
          variant="contained"
          sx={{
            px: 10,
            borderRadius: "50px",
            background: "red",
            color: "#fff",
            fontSize: "20px",
            mt: 10,
            "&:hover": {
              backgroundColor: "red",
            },
          }}
          size="large"
        >
          Send
        </Button>
      </Container>
    </Fragment>
  );
}

export default contact;
