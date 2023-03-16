import RangeSlider from "@/components/RangeSlider";
import Reviews from "@/components/Reviews";
import SelectInput from "@/components/SelectInput";
import useScreenWidth from "@/hooks/useScreenWidth";
import useThemeMode from "@/hooks/useThemeMode";
import { darkTheme, lightTheme } from "@/styles/theme";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

function Home() {
  const { isSm } = useScreenWidth();
  console.log("🚀 ~ file: home.js:21 ~ Home ~ isSm:", isSm);
  const { isLightMode } = useThemeMode();
  return (
    <div>
      <Box
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
        height="70vh"
        px={4}
        pt={3}
      >
        <Box>
          <Typography
            fontWeight="bolder"
            variant={isSm ? "h3" : "h1"}
            color="#fff"
          >
            WELCOME TO <br /> HIGH SPEC CARS
          </Typography>
          <Divider
            sx={{
              mb: 3,
              mt: 1,
              background: "#fff",
              height: isSm ? "15px" : "30px",
              width: { md: "10%", xs: "30%" },
            }}
          />
          <Typography
            variant={isSm ? "h5" : "h4"}
            fontWeight="bolder"
            color="#fff"
            mb={3}
          >
            Experience Luxury Driven Performance
          </Typography>
          <Button
            size={isSm ? "small" : "large"}
            sx={{
              color: "#000",
              backgroundColor: "#fff",
              borderRadius: "10%",
              // px: isSm10,
              width: { md: "28%", sm: "50%", xs: "100%" },
              fontWeight: "bolder",
              fontSize: isSm ? "16px" : "20px",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
          >
            Browse our showroom
          </Button>
        </Box>
      </Box>

      <Box sx={{ pb: 5, pt: 3, px: isSm ? 2 : 10 }}>
        <Typography variant="h5" mb={2} align="center">
          Search Our Stock
        </Typography>
        <ThemeProvider theme={isLightMode ? darkTheme : lightTheme}>
          <Paper
            sx={{
              pl: 2,
              pr: isSm ? 2 : 5,
              pb: 2.5,
              borderRadius: 5,
            }}
          >
            <Grid
              container
              mt={2}
              spacing={3}
              divider={
                !isSm ? <Divider flexItem orientation="vertical" /> : null
              }
              alignItems="center"
            >
              <Grid item md={4} xs={12}>
                <SelectInput
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
              </Grid>
              <Grid item md={4} xs={12}>
                <SelectInput
                  options={[
                    { label: "Any model (7)", value: "all" },
                    { label: "C-Class (2)", value: "19254" },
                    { label: "Cla (1)", value: "3677" },
                    { label: "E-Class (2)", value: "1234" },
                    { label: "S-Class (2)", value: "1265" },
                  ]}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <RangeSlider />
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            sx={{
              px: 10,
              borderRadius: "50px",
              background: "red",
              color: "#fff",
              fontSize: "20px",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            size="large"
          >
            Search
          </Button>
        </Box>
      </Box>
      <Reviews />
      <Box p={4}>
        <Grid container spacing={5}>
          <Grid item md={9}>
            <Typography variant="h4">
              HIGH SPEC CARS, Experience Luxury Driven Performance
            </Typography>
            <Typography variant="h5">Welcome to HIGH SPEC CARS</Typography>
            <Typography>
              High Spec Cars Ltd provides a wide range of pre-owned vehicles to
              purchase. We are sure to have something in stock to meet
              everyone's needs. Ready to set up a test drive? Stop by High Spec
              Cars and get behind the driver's seat today.
            </Typography>
            <br />
            <Typography>
              High Spec Cars Ltd provides a wide range of pre-owned vehicles to
              purchase. We are sure to have something in stock to meet
              everyone's needs. Ready to set up a test drive? Stop by High Spec
              Cars and get behind the driver's seat today. High Spec Cars Ltd
              provides a wide range of pre-owned vehicles to purchase. We are
              sure to have something in stock to meet everyone's needs. Ready to
              set up a test drive? Stop by High Spec Cars and get behind the
              driver's seat today. High Spec Cars Ltd provides a wide range of
              pre-owned vehicles to purchase. We are sure to have something in
              stock to meet everyone's needs. Ready to set up a test drive? Stop
              by High Spec Cars and get behind the driver's seat today.
            </Typography>
            <br />
            <Typography>
              High Spec Cars Ltd provides a wide range of pre-owned vehicles to
              purchase. We are sure to have something in stock to meet
              everyone's needs. Ready to set up a test drive? Stop by High Spec
              Cars and get behind the driver's seat today. High Spec Cars Ltd
              provides a wide range of pre-owned vehicles to purchase. We are
              sure to have something in stock to meet everyone's needs. Ready to
              set up a test drive? Stop by High Spec Cars and get behind the
              driver's seat today. High Spec Cars Ltd provides a wide range of
              pre-owned vehicles to purchase. We are sure to have something in
              stock to meet everyone's needs. Ready to set up a test drive? Stop
              by High Spec Cars and get behind the driver's seat today.
            </Typography>

            <Typography>
              High Spec Cars Ltd provides a wide range of pre-owned vehicles to
              purchase. We are sure to have something in stock to meet
              everyone's needs. Ready to set up a test drive? Stop by High Spec
              Cars and get behind the driver's seat today. High Spec Cars Ltd
              provides a wide range of pre-owned vehicles to purchase. We are
              sure to have something in stock to meet everyone's needs. Ready to
              set up a test drive? Stop by High Spec Cars and get behind the
              driver's seat today. High Spec Cars Ltd provides a wide range of
              pre-owned vehicles to purchase. We are sure to have something in
              stock to meet everyone's needs. Ready to set up a test drive? Stop
              by High Spec Cars and get behind the driver's seat today.
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box>
              <Image
                height={300}
                width={300}
                src="https://static.wixstatic.com/media/89712714a13f44968d486aa56e53bd0e.jpeg/v1/fill/w_850,h_905,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/89712714a13f44968d486aa56e53bd0e.jpeg"
                alt="aside"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography variant="h6" fontWeight={"bolder"} align="center">
              Get in touch with High Spec Cars
            </Typography>
            <Grid container justifyContent="space-evenly" sx={{ mt: 4 }}>
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <Image
                  height={70}
                  width={70}
                  src="/assets/phone.svg"
                  alt="phone"
                />
                <Typography color="text.secondary">
                  Give us a call on -
                </Typography>
                <Typography color="text.main" fontWeight={"bolder"}>
                  07375 370444
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <Image
                  height={70}
                  width={70}
                  src="/assets/email.svg"
                  alt="email"
                />
                <Typography color="text.secondary">
                  Drop us a mail on -
                </Typography>
                <Typography color="text.main" fontWeight={"bolder"}>
                  a@highspeccars.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
