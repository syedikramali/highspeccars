import HSelect from "@/components/HSelect";
import HeroSlider from "@/components/HeroSlider";
import RangeSlider from "@/components/RangeSlider";
import Reviews from "@/components/Reviews";
import SelectInput from "@/components/SelectInput";
import { CONTACT, MAKE_OPTIONS, PRICE } from "@/constants";
import { database } from "@/firebase";
import useScreenWidth from "@/hooks/useScreenWidth";
import useThemeMode from "@/hooks/useThemeMode";
import { darkTheme, lightTheme } from "@/styles/theme";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { Form, Formik } from "formik";
import {
  filter,
  groupBy,
  isEmpty,
  map,
  mapValues,
  max,
  min,
  size,
} from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

function Home() {
  const { isSm } = useScreenWidth();
  const { isLightMode } = useThemeMode();
  const router = useRouter();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(database, "cars"));
    let docs = [];
    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });
    return docs;
  };

  const { data, isLoading } = useQuery(["cars"], getData);

  return (
    <div>
      <HeroSlider />
      <Box sx={{ pb: 5, pt: 3, px: isSm ? 2 : 10 }}>
        <Typography variant="h5" mb={2} align="center">
          Search Our Stock
        </Typography>
        {!isLoading ? (
          <Formik
            initialValues={{
              make: "",
              model: "",
              budget: {
                type: "price",
                min: min(map(data, "price")),
                max: max(map(data, "price")),
              },
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              const { min, max, budget, model, make } = values;
              router.push({
                pathname: "/app/cars",
                query: { min, max, model, make, ...budget },
              });
              setSubmitting(false);
            }}
          >
            {function SearchForm({ values, setFieldValue }) {
              useEffect(() => {
                setFieldValue("model", "");
              }, [values.make]);

              return (
                <Form>
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
                          !isSm ? (
                            <Divider flexItem orientation="vertical" />
                          ) : null
                        }
                        alignItems="center"
                      >
                        <Grid item md={3} xs={12}>
                          <HSelect
                            options={map(data, "make")}
                            name="make"
                            label="Make"
                            placeholder="Select make"
                          />
                        </Grid>
                        <Grid item md={3} xs={12}>
                          <HSelect
                            disabled={!values.make}
                            options={map(
                              filter(data, { make: values.make }),
                              "model"
                            )}
                            name="model"
                            label="Model"
                            placeholder="Select model"
                          />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <RangeSlider
                            value={values.budget}
                            setValue={(val) => setFieldValue("budget", val)}
                            min={(type) => min(map(data, type))}
                            max={(type) => max(map(data, type))}
                          />
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
                      type="submit"
                    >
                      Search
                    </Button>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        ) : null}
      </Box>
      <Reviews />
      <Box p={4}>
        <Grid container spacing={5}>
          <Grid item md={8}>
            <Typography variant="h4" mb={2}>
              HIGH SPEC CARS, Experience Luxury Driven Performance
            </Typography>
            <Typography variant="h5">Welcome to HIGH SPEC CARS</Typography>
            <Typography pt={1}>
              High Spec Cars Ltd provides a wide range of pre-owned vehicles to
              purchase. We are sure to have something in stock to meet
              everyone&apos;s needs. Ready to set up a test drive? Stop by High
              Spec Cars and get behind the driver&apos;s seat today. Welcome to
              our premier used car dealership, located in the heart of Watford,
              UK! We specialize in providing the highest quality, high spec
              vehicles to our valued customers. Our team is dedicated to
              sourcing only the best pre-owned cars, ensuring that each vehicle
              meets our stringent standards for quality and performance. Whether
              you&apos;re in the market for a luxury saloon, a high-performance
              sports car, or a spacious SUV, we have the perfect vehicle for
              you. Our friendly and knowledgeable staff are here to help you
              find the car of your dreams and answer any questions you may have.
              Browse our extensive inventory online or visit us in person today
              and experience the difference for yourself!{" "}
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Image
                height={300}
                width={300}
                src="/assets/home-about.jpg"
                alt="aside"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography variant="h6" fontWeight={"bolder"} align="center">
              Get in touch with High Spec Cars
            </Typography>
            <Grid container spacing={isSm ? 3 : 0} sx={{ mt: 4 }}>
              <Grid item md={5} xs={12} sx={{ textAlign: "center" }}>
                <Image
                  height={isSm ? 40 : 70}
                  width={isSm ? 40 : 70}
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
              <Grid item md={7} xs={12} sx={{ textAlign: "center" }}>
                <Image
                  height={isSm ? 40 : 70}
                  width={isSm ? 40 : 70}
                  src="/assets/email.svg"
                  alt="email"
                />
                <Typography color="text.secondary" noWrap={false}>
                  Drop us a mail on -
                </Typography>
                <Typography color="text.main" fontWeight={"bolder"}>
                  {CONTACT.email}
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
