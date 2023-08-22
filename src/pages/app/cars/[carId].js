import EnquireDialog from "@/components/Enquire";
import MediaViewer from "@/components/MediaViewer";
import { database } from "@/firebase";
import toPound from "@/utility/toPound";
import {
  Box,
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { map, startCase } from "lodash";
import { useRouter } from "next/router";
import { Children, Fragment, useState } from "react";
import { useQuery } from "react-query";

function Car() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { data = {}, isLoading } = useQuery(
    ["car", router.query.carId],
    async () => {
      const docSnap = await getDoc(doc(database, "cars", router.query.carId));
      if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
      else toast.error("Invalid car!");
      return {};
    }
  );

  if (isLoading) return null;

  return (
    <Fragment>
      <Box p={3}>
        <Grid container spacing={5}>
          <Grid item md={7}>
            <MediaViewer media={data.media} carId={data.id} />
          </Grid>
          <Grid item md={5}>
            <Typography variant="h4" fontWeight={"bolder"}>
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              justifyContent={"space-between"}
              mt={4}
            >
              <Box
                flex={1}
                textAlign={"center"}
                border={"5px solid"}
                borderColor={"divider"}
                borderRadius={100}
                py={2}
              >
                <Typography variant="h6" fontWeight="bolder" color="error">
                  Finance
                </Typography>
                <Typography variant="h4" fontWeight={"bolder"}>
                  {toPound(data.finance)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  per month on PCP
                </Typography>
              </Box>
              <Box
                flex={1}
                textAlign={"center"}
                border={"5px solid"}
                borderColor={"divider"}
                borderRadius={10}
                py={2}
                display="grid"
                sx={{ placeItems: "center" }}
              >
                {data.sold ? (
                  <Typography
                    variant="h4"
                    fontWeight="bolder"
                    color="text.secondary"
                  >
                    Sold
                  </Typography>
                ) : (
                  <Fragment>
                    <Typography variant="h6" fontWeight="bolder" color="error">
                      Our Price
                    </Typography>
                    <Typography variant="h4" fontWeight={"bolder"}>
                      {toPound(data.price)}
                    </Typography>
                  </Fragment>
                )}
              </Box>
            </Stack>

            <Table sx={{ mt: 4 }}>
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
                    (property) => {
                      return (
                        <TableRow>
                          <TableCell padding="none">
                            <Typography variant="body1" pb={0.5} pt={2}>
                              {startCase(property)}
                            </Typography>
                          </TableCell>
                          <TableCell align="right" padding="none">
                            <Typography variant="body1" color="error">
                              {data[property]}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )
                )}
              </TableBody>
            </Table>

            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ fontWeight: "bolder", borderRadius: 10, mt: 3 }}
              onClick={setOpen}
            >
              Enquire
            </Button>
          </Grid>
        </Grid>
      </Box>

      <EnquireDialog {...{ open, setOpen, data }} />
    </Fragment>
  );
}

export default Car;
