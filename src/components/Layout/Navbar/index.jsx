import { CONTACT } from "@/constants";
import useScreenWidth from "@/hooks/useScreenWidth";
import useThemeMode from "@/hooks/useThemeMode";
import { usePreference } from "@/store";
import {
  Close,
  Home,
  InfoOutlined,
  Menu,
  NightsStay,
  Phone,
  WbSunnyOutlined,
} from "@mui/icons-material";
import {
  Alert,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { includes, map } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Children, Fragment, createElement, useState } from "react";

function Navbar() {
  const { toggleMode } = usePreference();
  const { isLightMode } = useThemeMode();
  const { isSm, isXs } = useScreenWidth();
  const { pathname } = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <AppBar elevation={0}>
        <Toolbar sx={{ pr: isXs ? 1 : "auto" }}>
          <Link href="/app/home">
            <Image
              src={
                isLightMode ? "/assets/logo.light.png" : "/assets/logo.dark.png"
              }
              height={isSm ? 40 : 60}
              width={isSm ? 70 : 200}
              style={{
                objectFit: "contain",
              }}
              alt="High Spec Cars"
            />
          </Link>

          {isXs ? (
            <Box width={"100%"} textAlign={"right"}>
              <IconButton
                onClick={toggleMode}
                sx={{ color: isLightMode ? "#000" : "warning.main" }}
              >
                {isLightMode ? <NightsStay /> : <WbSunnyOutlined />}
              </IconButton>
              <IconButton onClick={() => setOpen(!open)}>
                {open ? <Close fontSize="large" /> : <Menu fontSize="large" />}
              </IconButton>
            </Box>
          ) : (
            <Stack
              direction={"row"}
              justifyContent="space-between"
              width={"100%"}
              alignItems="center"
            >
              <Stack
                direction={"row"}
                spacing={3}
                justifyContent="center"
                width="100%"
              >
                {Children.toArray(
                  map(
                    [
                      ...(includes(pathname, "/app/admin")
                        ? [
                            {
                              label: "Add New Car",
                              link: "/app/admin/cars/add",
                            },
                            { label: "Cars", link: "/app/admin/cars" },
                          ]
                        : [
                            { label: "Home", link: "/app/home" },
                            { label: "About", link: "/app/about" },
                            { label: "Contact", link: "/app/contact" },
                            { label: "Warranty", link: "/app/warranty" },
                            {
                              label: "Sold Vehicles",
                              link: "/app/cars?sold=true",
                            },
                            {
                              label: "Vehicle Sourcing",
                              link: "/app/vehicle-sourcing",
                            },
                          ]),
                    ],
                    ({ label, link }) => {
                      return (
                        <Typography
                          component={Link}
                          href={link}
                          color="text.primary"
                        >
                          {label}
                        </Typography>
                      );
                    }
                  )
                )}
              </Stack>

              <Stack width="20ch">
                <Typography color="error" variant="caption">
                  Call us now on:
                </Typography>
                <Typography
                  color="text.primary"
                  fontWeight={"bolder"}
                  variant="body2"
                >
                  {CONTACT.mobile}
                </Typography>
              </Stack>

              <IconButton
                onClick={toggleMode}
                sx={{ color: isLightMode ? "#000" : "warning.main" }}
              >
                {isLightMode ? <NightsStay /> : <WbSunnyOutlined />}
              </IconButton>
            </Stack>
          )}
        </Toolbar>
        <Divider />
      </AppBar>
      <Toolbar />
      <Alert severity="error">Website under maintenance</Alert>

      <Drawer open={open} onClose={() => setOpen(false)} anchor="bottom">
        <List>
          {Children.toArray(
            map(
              [
                { label: "Home", link: "/app/home", icon: Home },
                { label: "About", link: "/app/about", icon: InfoOutlined },
                { label: "Contact", link: "/app/contact", icon: Phone },
                { label: "Warranty", link: "/app/warranty", icon: Phone },
              ],
              ({ label, link, icon }) => {
                return (
                  <ListItemButton
                    LinkComponent={Link}
                    href={link}
                    onClick={() => setOpen(false)}
                    selected={pathname === link}
                  >
                    <ListItemIcon color="error" sx={{ minWidth: 0, pr: 2 }}>
                      {createElement(icon, {
                        color: pathname === link ? "error" : "text.primary",
                      })}
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        color:
                          pathname === link ? "error.main" : "text.primary",
                      }}
                    />
                  </ListItemButton>
                );
              }
            )
          )}
          <Stack width="20ch">
            <Typography color="error" variant="caption"></Typography>
            <Typography
              color="text.primary"
              fontWeight={"bolder"}
              variant="body2"
            ></Typography>
          </Stack>

          <ListItem sx={{ py: 0, mt: 5 }}>
            <ListItemText
              primary="Call us now on:"
              secondary={CONTACT.mobile}
              sx={{ textAlign: "right" }}
              primaryTypographyProps={{
                variant: "caption",
                color: "error",
              }}
              secondaryTypographyProps={{
                variant: "body2",
                fontWeight: "bolder",
                color: "text.primary",
              }}
            />
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
}

export default Navbar;
