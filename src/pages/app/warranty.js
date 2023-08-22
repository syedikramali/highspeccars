import { Container, Typography } from "@mui/material";
import React from "react";

function Warranty() {
  return (
    <Container sx={{ pt: 4, pb: 10 }}>
      <Typography variant="h6" mb={2}>
        Drive away with complete peace of mind.
      </Typography>
      <Typography color={"text.secondary"}>
        We pride ourselves on providing mechanically sound and robust products
        that have been maintained in accordance with the manufacturer&apos;s
        service schedule wherever possible. That said, as cars are after all
        mechanical, we offer a standard, totally free 3 month parts and labour
        warranty on all vehicles.
      </Typography>

      <Typography variant="h4" mb={2} mt={4} color="error">
        Extendable Warranty
      </Typography>
      <Typography color={"text.secondary"}>
        There is also the option to purchase a more comprehensive product up to
        a period of 3 years at an additional cost.
      </Typography>
      <Typography color={"text.secondary"}>
        Please call
        <Typography color={"error"} px={0.5} component={"span"}>
          01484 556116
        </Typography>
        for a detailed overview of all products and services available.
      </Typography>
    </Container>
  );
}

export default Warranty;
