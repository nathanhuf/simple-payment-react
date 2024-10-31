import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DeliveryCard() {
  return (
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "left", fontSize: "30px" }}
        >
          Delivery
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left", fontSize: "22px" }}
        >
          Mobile Entry - Free
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left" }}
        >
          Tickets Available by Sun Sep 10, 2023
          <br />
          These mobile tickets will be transferred directly to you from a
          trusted seller. We'll email you instructions on how to accept them on
          the original ticket provider's mobile app.
        </Typography>
      </CardContent>
    </Card>
  );
}
