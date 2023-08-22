import HSelect from "@/components/HSelect";
import RangeSlider from "@/components/RangeSlider";
import { PRICE } from "@/constants";
import { database, getMedia } from "@/firebase";
import toPound from "@/utility/toPound";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { FormikProvider, useFormik } from "formik";
import {
  compact,
  every,
  filter,
  forEach,
  includes,
  map,
  max,
  min,
  sortBy,
  sortedUniq,
  startCase,
} from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { Children, Fragment, useEffect, useMemo } from "react";
import { useQuery } from "react-query";

function search() {
  const router = useRouter();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      make: router.query.make || "",
      model: router.query.model || "",
      year: "",
      mileage: "",
      status: { true: "Sold", false: "Unsold" }[router.query.sold] || "",
      sold: router.query.sold || false,
      bodyStyle: "",
      color: "",
      doors: "",
      transmission: "",
      fuelType: "",
      budget: {
        type: router.query.type || "price",
        min: router.query.min || "",
        max: router.query.max || "",
      },
    },
  });

  const getData = async () => {
    const querySnapshot = await getDocs(collection(database, "cars"));
    let docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    return docs;
  };

  const { data, isLoading } = useQuery(
    ["cars", { ...formik.values }],
    getData,
    { keepPreviousData: true }
  );

  const modelOptions = useMemo(
    () => map(filter(data, { make: formik.values.make }), "model"),
    [formik.values.make, data, isLoading]
  );

  useEffect(() => {
    if (!isLoading && !includes(modelOptions, formik.values.model))
      formik.setFieldValue("model", "");
  }, [formik.values.make, isLoading]);

  const filteredData = useMemo(() => {
    return filter(data, (item) => {
      let tests = [true];
      formik.values.make && tests.push(formik.values.make === item.make);
      formik.values.model && tests.push(formik.values.model === item.model);
      formik.values.year && tests.push(formik.values.year === item.year);
      formik.values.mileage &&
        tests.push(formik.values.mileage === item.mileage);

      formik.values.status &&
        tests.push(
          formik.values.status === "Sold"
            ? item.sold === true
            : item.sold === false
        );

      formik.values.bodyStyle &&
        tests.push(formik.values.bodyStyle === item.bodyStyle);

      formik.values.color && tests.push(formik.values.color === item.color);
      formik.values.doors && tests.push(formik.values.doors === item.doors);
      formik.values.transmission &&
        tests.push(formik.values.transmission === item.transmission);
      formik.values.fuelType &&
        tests.push(formik.values.fuelType === item.fuelType);

      tests.push(item[formik.values.budget.type] >= formik.values.budget.min);
      tests.push(item[formik.values.budget.type] <= formik.values.budget.max);
      return every(tests, Boolean);
    });
  }, [formik.values, data, isLoading]);

  if (isLoading) return null;

  return (
    <Box p={3}>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <FormikProvider value={formik}>
            <Stack spacing={3}>
              <HSelect
                options={map(data, "make")}
                name="make"
                label="Make"
                placeholder="Select make"
              />
              <HSelect
                disabled={!formik.values.make}
                options={map(
                  filter(data, { make: formik.values.make }),
                  "model"
                )}
                name="model"
                label="Model"
                placeholder="Select model"
              />

              {/* <HSelect
                options={sortedUniq(sortBy(map(data, "year")))}
                name="year"
                label="Year"
                placeholder="Select year"
              />

              <HSelect
                options={sortedUniq(sortBy(map(data, "mileage")))}
                name="mileage"
                label="Mileage"
                placeholder="Select Mileage"
              /> */}

              <HSelect
                options={["Sold", "Unsold"]}
                name="status"
                label="Status"
                placeholder="Select Status"
              />

              {Children.toArray(
                map(
                  [
                    "mileage",
                    "year",
                    "bodyStyle",
                    "color",
                    "doors",
                    "transmission",
                    "fuelType",
                  ],
                  (item) => {
                    return (
                      <HSelect
                        options={sortedUniq(sortBy(compact(map(data, item))))}
                        name={item}
                        label={startCase(item)}
                        placeholder={`Select ${startCase(item)}`}
                      />
                    );
                  }
                )
              )}

              {/* <HSelect
                options={map(data, "bodyStyle")}
                name="bodyStyle"
                label="Body Type"
                placeholder="Select body type"
              />

              <HSelect
                options={map(data, "color")}
                name="color"
                label="Color"
                placeholder="Select color"
              />

              <HSelect
                options={map(data, "doors")}
                name="doors"
                label="Doors"
                placeholder="Select doors"
              />

              <HSelect
                options={map(data, "transmission")}
                name="transmission"
                label="Transmission"
                placeholder="Select transmission"
              />

              <HSelect
                options={map(data, "fuelType")}
                name="fuelType"
                label="Fuel Type"
                placeholder="Select fuel type"
              /> */}

              <Button
                variant="outlined"
                color="error"
                type="button"
                onClick={() => {
                  router.replace({ query: "" }).then(() => {
                    formik.resetForm({
                      values: {
                        make: "",
                        model: "",
                        year: "",
                        mileage: "",
                        status: "",
                        bodyStyle: "",
                        color: "",
                        doors: "",
                        transmission: "",
                        fuelType: "",
                        budget: {
                          type: "price",
                          min: "",
                          max: "",
                        },
                      },
                    });
                  });
                }}
              >
                Clear Filters
              </Button>
            </Stack>
          </FormikProvider>
        </Grid>
        <Grid item md={10}>
          <Paper elevation={3} sx={{ px: 4, py: 1 }}>
            <RangeSlider
              value={formik.values.budget}
              setValue={(val) => formik.setFieldValue("budget", val)}
              min={(type) => min(map(data, type))}
              max={(type) => max(map(data, type))}
            />
          </Paper>

          <Grid container spacing={3} my={1}>
            {Children.toArray(
              map(filteredData, (car) => {
                return (
                  <Grid item xs={3}>
                    <Card>
                      <CardActionArea
                        LinkComponent={Link}
                        href={`/app/cars/${car.id}`}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={getMedia(car.id, car.media?.[0])}
                          alt="green iguana"
                        />
                        <Table size="small" sx={{ tableLayout: "fixed" }}>
                          <TableBody>
                            <TableRow>
                              <TableCell
                                sx={{
                                  borderRight: "1px solid",
                                  borderColor: "divider",
                                }}
                                align="center"
                              >
                                {car.sold ? (
                                  <Typography
                                    fontWeight="bolder"
                                    color="text.secondary"
                                  >
                                    SOLD
                                  </Typography>
                                ) : (
                                  <Fragment>
                                    <Typography variant="caption" color="error">
                                      Price
                                    </Typography>
                                    <Typography>
                                      {toPound(car.price)}
                                    </Typography>
                                  </Fragment>
                                )}
                              </TableCell>
                              <TableCell align="center">
                                <Typography variant="caption" color="error">
                                  Finance
                                </Typography>
                                <Typography>
                                  {toPound(car.finance)}{" "}
                                  <Typography
                                    color="text.secondary"
                                    variant="body2"
                                    component="span"
                                  >
                                    p/mo
                                  </Typography>
                                </Typography>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <CardContent>
                          <Typography variant="h6">{car.name}</Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            noWrap
                          >
                            {car.description}
                          </Typography>
                          <Table size="small" sx={{ mt: 1 }}>
                            <TableBody>
                              {Children.toArray(
                                map(
                                  [
                                    "mileage",
                                    "year",
                                    "bodyStyle",
                                    "color",
                                    "doors",
                                    "transmission",
                                    "fuelType",
                                  ],
                                  (item) => {
                                    return (
                                      <TableRow>
                                        <TableCell align="left" sx={{ pl: 0 }}>
                                          <Typography
                                            variant="caption"
                                            color="text.secondary"
                                          >
                                            {startCase(item)}
                                          </Typography>
                                        </TableCell>
                                        <TableCell
                                          align="right"
                                          sx={{ pr: 0.5 }}
                                        >
                                          <Typography
                                            variant="caption"
                                            color="error"
                                          >
                                            {car[item]}
                                          </Typography>
                                        </TableCell>
                                      </TableRow>
                                    );
                                  }
                                )
                              )}
                            </TableBody>
                          </Table>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default search;
