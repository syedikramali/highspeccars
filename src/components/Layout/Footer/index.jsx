import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { map } from "lodash";
import Link from "next/link";
import React, { Children } from "react";

function Footer() {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h5">Company Info</Typography>
        <Divider sx={{ mt: 1, mb: 2 }} />
        <Typography color="text.secondary" variant="body2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          accusantium facere ipsam error voluptates! Minima voluptas quod
          officia veniam magnam velit, exercitationem consectetur cumque
          accusamus alias explicabo quibusdam, tenetur eum repudiandae quas
          itaque error impedit nulla ipsam vitae cupiditate ut provident
          architecto reprehenderit! Nam impedit repellendus molestias tempore,
          ab distinctio iusto eius nobis est sapiente itaque voluptates
          accusantium at aut doloremque alias, fuga optio quia quos rem velit
          non veritatis deserunt! Qui illo non quaerat dolore molestias dolores,
          quam officiis quos ut dicta quo libero reprehenderit porro, placeat
          saepe totam sequi explicabo delectus vero esse commodi optio? Fugit,
          ipsum vel!
        </Typography>
        <br />
        <Typography color="text.secondary" variant="body2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          accusantium facere ipsam error voluptates! Minima voluptas quod
          officia veniam magnam velit, exercitationem consectetur cumque
          accusamus alias explicabo quibusdam, tenetur eum repudiandae quas
          itaque error impedit nulla ipsam vitae cupiditate ut provident
          architecto reprehenderit! Nam impedit repellendus molestias tempore,
          ab distinctio iusto eius nobis est sapiente itaque voluptates
          accusantium at aut doloremque alias, fuga optio quia quos rem velit
          non veritatis deserunt! Qui illo non quaerat dolore molestias dolores,
          quam officiis quos ut dicta quo libero reprehenderit porro, placeat
          saepe totam sequi explicabo delectus vero esse commodi optio? Fugit,
          ipsum vel!
        </Typography>
        <Divider sx={{ mt: 1, mb: 2 }} />

        <Stack
          alignItems={"center"}
          direction="row"
          spacing={2}
          divider={
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          }
        >
          {Children.toArray(
            map(
              [
                { label: "Terms of Use", link: "/terms-of-use" },
                { label: "Privacy", link: "/privacy" },
                { label: "Cookies", link: "/cookies" },
                { label: "Sitemap", link: "/sitemap" },
              ],
              ({ label, link }) => {
                return (
                  <Typography
                    variant="body1"
                    color="text.secondary"
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
