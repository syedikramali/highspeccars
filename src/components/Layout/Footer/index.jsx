import { WORKING_HRS } from "@/constants";
import useScreenWidth from "@/hooks/useScreenWidth";
import { CalendarMonth, Event } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { map, size } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";

function Footer() {
  const { pathname } = useRouter();
  const { isSm } = useScreenWidth();
  return (
    <Paper>
      <Box p={3}>
        <Typography variant="h5">Company Info</Typography>
        <Divider sx={{ mt: 1, mb: 2 }} />
        <Grid container spacing={isSm ? 3 : 5}>
          <Grid item md={9} xs={12}>
            <Typography>Company No. 14404539 </Typography>
            <Typography
              color="text.secondary"
              variant="body2"
              pt={1}
              align="justify"
            >
              HIGH SPEC CAR SALES AND DETAILING LTD is authorised and regulated.
              All finance is subject to status and income. Written Quotation on
              request. We act as a credit broker, not a lender. We work with
              several carefully selected credit providers who may be able to
              offer you finance for your purchase. We are only able to offer
              finance products from these providers.
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography>Opening Hours</Typography>
            <Table size="small" padding="none">
              <TableBody>
                {Children.toArray(
                  map(WORKING_HRS, ({ day, time }, index) => {
                    let isLast = size(WORKING_HRS) === index + 1;
                    return (
                      <TableRow>
                        <TableCell
                          sx={{
                            ...(isLast ? { borderBottom: 0 } : {}),
                            py: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              columnGap: 0.5,
                            }}
                            color="text.secondary"
                            variant="body2"
                          >
                            <CalendarMonth color="inherit" />
                            {day}
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ ...(isLast ? { borderBottom: 0 } : {}), py: 1 }}
                        >
                          <Typography color="text.secondary" variant="body2">
                            {time}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 1, mb: 2 }} />

        <Stack
          alignItems={"center"}
          direction={isSm ? "column" : "row"}
          spacing={isSm ? 0 : 2}
          mt={isSm ? 5 : 0}
          divider={
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          }
        >
          {Children.toArray(
            map(
              [
                { label: "Terms of Use", link: "/app/terms-of-use" },
                { label: "Privacy", link: "/app/privacy" },
                { label: "Cookies", link: "/app/cookies" },
              ],
              ({ label, link }) => {
                return (
                  <Typography
                    variant="body1"
                    color={
                      pathname === link ? "text.primary" : "text.secondary"
                    }
                    fontWeight={"normal"}
                    component={Link}
                    href={link}
                    sx={{ "&:hover": { color: "text.primary" } }}
                  >
                    {label}
                  </Typography>
                );
              }
            )
          )}
        </Stack>
      </Box>
    </Paper>
  );
}

export default Footer;
