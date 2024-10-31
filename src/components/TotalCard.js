import React, { useCallback, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { UserContext, UserDispatchContext } from "../Context";

export default function TotalCard({ showData }) {
  const fee = 91.11;
  const paymentDetails = useContext(UserContext);
  const setPaymentDetails = useContext(UserDispatchContext);

  const onCancelOrder = useCallback(() => {
    setPaymentDetails({ ...paymentDetails, page: 0 });
  }, []);

  return (
    <Card sx={{ textAlign: "left" }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item sx={{ flex: 2 }}>
              Total
            </Grid>
            <Grid item sx={{ flex: 1, textAlign: "right" }}>
              $
              {`${(paymentDetails.price * paymentDetails.count + fee).toFixed(
                2
              )}`}
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Tickets
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item sx={{ flex: 2 }}>
              Resale Tickets: $
              {`${paymentDetails.price} * ${paymentDetails.count}`}
            </Grid>
            <Grid item sx={{ flex: 1, textAlign: "right" }}>
              ${`${(paymentDetails.price * paymentDetails.count).toFixed(2)}`}
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Notes From Seller
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {showData[paymentDetails.ticketId].explanation}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Fees
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item sx={{ flex: 2 }}>
              Service Fee: $44.08 * 2
            </Grid>
            <Grid item sx={{ flex: 1, textAlign: "right" }}>
              $88.16
            </Grid>
          </Grid>
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item sx={{ flex: 2 }}>
              Order Proccessing Fee
            </Grid>
            <Grid item sx={{ flex: 1, textAlign: "right" }}>
              $2.95
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Delivery
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid item sx={{ flex: 2 }}>
              Mobile Entry
            </Grid>
            <Grid item sx={{ flex: 1, textAlign: "right" }}>
              Free
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardContent>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={onCancelOrder}
        >
          Cancel Order
        </Button>
      </CardContent>
      <CardContent>
        <Button fullWidth variant="contained" color="success">
          Place Order
        </Button>
      </CardContent>
    </Card>
  );
}
