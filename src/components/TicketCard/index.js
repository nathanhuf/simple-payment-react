import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import QuantityInput from "./QuantityInput";
import { UserContext, UserDispatchContext } from "../../Context";

export default function TicketCard({ logo, title, explanation, price, index }) {
  const setPaymentDetails = React.useContext(UserDispatchContext);
  const [count, setCount] = React.useState(0);

  const onClickTicket = React.useCallback(() => {
    if (count > 0)
      setPaymentDetails({ count, ticketId: index, price, page: 1 });
  }, [count]);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="example"
        height="140"
        image={"./Meta.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {explanation}
        </Typography>
      </CardContent>
      <CardActions>
        <QuantityInput count={count} setCount={setCount} />
        <Typography variant="body2" color="text.secondary">
          {`** ${price}$ **`}
        </Typography>
        <Button size="small" onClick={onClickTicket}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
