import "./App.css";
import React from "react";

import { UserProvider } from "./Context";
import AppCover from "./pages/AppCover";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppCover />
      </UserProvider>
    </div>
  );
}

export default App;
