import React, { useContext } from "react";
import ShowList from "./ShowList";
import showData from "../data";

import { UserContext } from "../Context";
import PaymentPage from "./PaymentPage";

export default function AppCover() {
  const paymentDetails = useContext(UserContext);
  return (
    <div className="App-cover">
      {paymentDetails.page === 0 ? (
        <ShowList showData={showData} />
      ) : (
        <PaymentPage showData={showData} />
      )}
    </div>
  );
}
