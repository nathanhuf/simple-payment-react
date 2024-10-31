import React, { useCallback, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { UserContext, UserDispatchContext } from "../Context";

export default function PaymentCard() {
  const paymentDetails = useContext(UserContext);
  const setPaymentDetails = useContext(UserDispatchContext);

  const onCancelOrder = useCallback(() => {
    setPaymentDetails({ ...paymentDetails, page: 0 });
  }, []);

  return (
    <Card sx={{ textAlign: "left" }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Payment
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Use Credit / Debit Card
        </Typography>
      </CardContent>
      <CardContent>
        <Button>+ Add Card</Button>
      </CardContent>
    </Card>
  );
}
