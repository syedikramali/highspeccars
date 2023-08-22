import HSelect from "@/components/HSelect";
import HTextField from "@/components/HTextField";
import RangeSlider from "@/components/RangeSlider";
import { database } from "@/firebase";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { Form, Formik } from "formik";
import {
  compact,
  filter,
  map,
  max,
  min,
  sortBy,
  sortedUniq,
  startCase,
} from "lodash";
import { Children, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import * as yup from "yup";

function VehicleSourcing() {
  const getData = async () => {
    const querySnapshot = await getDocs(collection(database, "cars"));
    let docs = [];
    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });
    return docs;
  };

  const { data, isLoading } = useQuery(["cars"], getData);

  console.log(process.env.NEXT_PUBLIC_EMAIL_URL);

  return (
    <Container sx={{ mb: 3, py: 4 }}>
      <Typography variant="h4" mb={4}>
        Vehicle Sourcing
      </Typography>
      <Paper
        sx={{
          px: 3,
          py: 4,
          borderRadius: 3,
        }}
      >
        <Formik
          initialValues={{
            make: "",
            name: "",
            email: "",
            phone: "",
            model: "",
            comments: "",
            fuelType: "",
            transmission: "",
            budget: {
              type: "price",
              min: min(map(data, "price")),
              max: max(map(data, "price")),
            },
            year: {
              to: "",
              from: "",
            },
            subject: "Vehicle Sourcing",
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required("Please enter your name"),
            phone: yup.string().required("Please enter your phone number"),
            email: yup
              .string()
              .email("Please enter a valid email address")
              .required("Please enter your email address"),
            make: yup.string().required("Please enter your make"),
            model: yup.string().required("Please enter your model"),
            transmission: yup
              .string()
              .required("Please enter your transmission"),
            fuelType: yup.string().required("Please enter your fuel type"),
            year: yup.object().shape({
              to: yup.string().required("To year is required"),
              from: yup.string().required("From year is required"),
            }),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            let config = {
              method: "post",
              maxBodyLength: Infinity,
              url: process.env.NEXT_PUBLIC_EMAIL_URL,
              headers: {},
              data: JSON.stringify(values),
            };

            axios
              .request(config)
              .then((response) => {
                resetForm();
                toast.success(response.data.message);
              })
              .catch((error) => {
                console.log(error);
                toast.error(error.message);
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {function SearchForm({ values, setFieldValue, isSubmitting }) {
            useEffect(() => {
              setFieldValue("model", "");
            }, [values.make]);

            return (
              <Form>
                <Grid
                  container
                  columnSpacing={3}
                  rowSpacing={4}
                  alignItems="center"
                >
                  <Grid item md={4} xs={12}>
                    <HTextField
                      name="name"
                      label="Full Name"
                      placeholder="Enter your full name"
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <HTextField
                      name="phone"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      type="number"
                    />
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <HTextField
                      name="email"
                      label="Email Address"
                      placeholder="Enter your email address"
                    />
                  </Grid>
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
                  {Children.toArray(
                    map(["transmission", "fuelType"], (item) => {
                      return (
                        <Grid item md={3} xs={12}>
                          <HSelect
                            options={sortedUniq(
                              sortBy(compact(map(data, item)))
                            )}
                            name={item}
                            label={startCase(item)}
                            placeholder={`Select ${startCase(item)}`}
                          />
                        </Grid>
                      );
                    })
                  )}
                  <Grid item xs={12}>
                    <Box mt={1} px={3}>
                      <RangeSlider
                        value={values.budget}
                        setValue={(val) => setFieldValue("budget", val)}
                        min={(type) => min(map(data, type))}
                        max={(type) => max(map(data, type))}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <HTextField
                      name="year.from"
                      label="Year From"
                      placeholder="Year From"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <HTextField
                      name="year.to"
                      label="Year To"
                      placeholder="Year To"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <HTextField
                      name="comments"
                      label="Comments"
                      placeholder="Enter your comments"
                      multiline
                      minRows={4}
                    />
                  </Grid>
                </Grid>
                <Box textAlign="center" mt={4}>
                  <Button
                    disabled={isSubmitting}
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
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    </Container>
  );
}

export default VehicleSourcing;
