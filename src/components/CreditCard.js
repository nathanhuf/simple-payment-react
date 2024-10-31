import React, { useState, useCallback } from "react";
import Card from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../utils";

export default function CreditCard() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocused] = useState("");
  const [formData, SetFormData] = useState(null);

  const handleInputFocus = useCallback(({ target }) => {
    setFocused(target.name);
  }, []);

  const handleInputChange = useCallback(({ target }) => {
    if (target.name === "number") {
      setNumber(formatCreditCardNumber(target.value));
    } else if (target.name === "expiry") {
      setExpiry(formatExpirationDate(target.value));
    } else if (target.name === "cvc") {
      setCvc(formatCVC(target.value));
    } else if (target.name === "name") {
      setName(target.value);
    }
  }, []);

  return (
    <div className="App-payment">
      <Card
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
        callback={({ issuer }, isValid) => {
          if (isValid) {
            setIssuer(issuer);
          }
        }}
      />
      <div className="App-payment-form-part">
        <div className="form-group">
          <small>Name on card: </small>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            pattern="[a-z A-Z-]+"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <small>Card Number: </small>

          <input
            type="tel"
            name="number"
            className="form-control"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            maxLength="19"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <small>Expiration Date: </small>

          <input
            type="tel"
            name="expiry"
            className="form-control"
            placeholder="Valid Thru"
            pattern="\d\d/\d\d"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <small>CVC: </small>

          <input
            type="tel"
            name="cvc"
            className="form-control"
            placeholder="CVC"
            pattern="\d{3}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <input type="hidden" name="issuer" value={issuer} />
      </div>
    </div>
  );
}
