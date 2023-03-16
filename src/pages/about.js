import { CONTACT } from "@/constants";
import { Call, CallOutlined, Email } from "@mui/icons-material";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <div>
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
          py={20}
          fontWeight="bolder"
        >
          High Spec Cars
        </Typography>
      </Box>

      <Grid container spacing={5} px={2} py={4}>
        <Grid item md={8} xs={12}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
          <br />
          <Typography>
            Orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
          <br />
          <Typography>
            Rem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <Paper sx={{ p: 2, borderTop: "3px solid #E34234" }}>
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <CallOutlined color="error" />
              <Typography variant="h5" fontWeight={"bolder"}>
                Get In Touch
              </Typography>
            </Stack>
            <Typography my={2} color="text.secondary">
              Why not contact us directly?
            </Typography>
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <Call color="error" />
              <Typography
                fontWeight={"bolder"}
                color="text.secondary"
                variant="h6"
              >
                {CONTACT.mobile}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems={"center"} spacing={1}>
              <Email color="error" />
              <Typography
                fontWeight={"bolder"}
                color="text.secondary"
                variant="h6"
              >
                {CONTACT.email}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
