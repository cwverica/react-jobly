import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Routes from "./routes/Routes";


function App() {
  let login, logout, signup; // will be functions in the future.

  return (
    <BrowserRouter>

      <div className="App">
        <Navbar logout={logout} />
        <Routes login={login} signup={signup} />
      </div>

    </BrowserRouter>
  );
}

export default App;
