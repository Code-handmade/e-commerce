import React from "react";
import Home from "../Home";
import Navbar from "../Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "../Products";
import Product from "../Product";
import Footer from "../Footer";
import Login from "../Login";

function LoginPages() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Switch>
        <Route exact path="/login" component={Login} />

        <Home />
      </Switch> */}
    </>
  );
}

export default LoginPages;
