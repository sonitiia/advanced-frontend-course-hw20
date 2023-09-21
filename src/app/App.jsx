import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import MuiTheme from "./MuiTheme";
import Header from "../components/Header";

const App = () => {
  return (
    <MuiTheme>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </MuiTheme>
  );
};

export default App;
