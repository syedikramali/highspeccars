import useThemeMode from "@/hooks/useThemeMode";
import { usePreference } from "@/store";
import { NightsStay, WbSunnyOutlined } from "@mui/icons-material";
import {
  AppBar,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { map } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { Children, Fragment } from "react";

function Navbar() {
  const { toggleMode } = usePreference();
  const { isLightMode } = useThemeMode();

  return (
    <Fragment>
      <AppBar elevation={0}>
        <Toolbar>
          <Link href="/home">
            <Image
              src={
                isLightMode ? "/assets/logo.light.png" : "/assets/logo.dark.png"
              }
              height={60}
              width={200}
              style={{
                objectFit: "contain",
              }}
              alt="High Spec Cars"
            />
          </Link>
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
                    { label: "Home", link: "/home" },
                    { label: "About", link: "/about" },
                    { label: "Contact", link: "/contact" },
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

            <IconButton
              onClick={toggleMode}
              sx={{ color: isLightMode ? "#000" : "warning.main" }}
            >
              {isLightMode ? <NightsStay /> : <WbSunnyOutlined />}
            </IconButton>
          </Stack>
        </Toolbar>
        <Divider />
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}

export default Navbar;
