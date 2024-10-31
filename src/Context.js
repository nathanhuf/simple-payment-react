import React, { createContext, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function UserProvider({ children }) {
  const [paymentDetails, setPaymentDetails] = useState({
    ticketId: 0,
    price: 0,
    count: 0,
    page: 0,
  });

  return (
    <UserContext.Provider value={paymentDetails}>
      <UserDispatchContext.Provider value={setPaymentDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
