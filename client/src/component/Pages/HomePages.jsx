import React from "react";
import Home from "../Home";
import Navbar from "../Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "../Products";
import Product from "../Product";
import Footer from "../Footer";
import Login from "../Login";
import LoginPages from "./LoginPages";
import Register from "../Register";

// function HomePages({ login, userLogin }) {
//   return (
//     <>
//       <Navbar login={login} userLogin={userLogin} />
//       <Products />
//       <Switch>
//         <Route exact path="/" component={Home} login={login} />
//         <Route exact path="/products" component={Products} />
//         <Route exact path="/products/:id" component={Product} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/register" component={Register} />
//         <Home />
//       </Switch>
//       <Footer />
//     </>
//   );
// }
function HomePages() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Home />
      </Switch>

      <Footer />
    </>
  );
}

export default HomePages;
