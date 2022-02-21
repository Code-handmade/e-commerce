import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "../../App.css";
import { Route, Switch } from "react-router-dom";

// product
import TableProduct from "../tableProduct/TableProduct";
import AddProduct from "../tableProduct/AddProduct";
import UpdateProduct from "../tableProduct/UpdateProduct";

// user
import TableUser from "../tableUser/TableUser";
import AddUser from "../tableUser/AddUser";
import UpdateUser from "../tableUser/UpdateUser";

function MainSection({ login, userLogin }) {
  return (
    <>
      <Navbar login={login} userLogin={userLogin} />
      <Switch>
        {/* product */}

        <Route exact path="/">
          <TableProduct />
        </Route>
        <Route exact path="/product/addProduct">
          <AddProduct />
        </Route>
        <Route exact path="/product/updateProduct">
          <UpdateProduct />
        </Route>

        {/* user */}
        <Route exact path="/user">
          <TableUser />
        </Route>
        <Route exact path="/user/addUser">
          <AddUser />
        </Route>
        <Route exact path="/user/updateUser">
          <UpdateUser />
        </Route>
      </Switch>
      <Footer id="footer" />
    </>
  );
}

export default MainSection;
