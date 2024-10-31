import { Container, Grid, Item } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import DeliveryCard from "../components/DeliveryCard";
import TotalCard from "../components/TotalCard";
import PaymentCard from "../components/PaymentCard";

export default function PaymentPage({ showData }) {
  return (
    <Container fixed>
      <Grid container spacing={2}>
        <Grid
          item
          xs={7}
          container
          spacing={1}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Grid item>
            <DeliveryCard />
          </Grid>
          <Grid item>
            <PaymentCard />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <TotalCard showData={showData} />
        </Grid>
      </Grid>
    </Container>
  );
}
