import React, { useState, useEffect } from "react";
import "./App.css";
import HomePages from "./component/Pages/HomePages";
// import Home from "./component/Home";
// import Navbar from "./component/Navbar";
// import { Switch, Route } from "react-router-dom";
// import Products from "./component/Products";
// import Product from "./component/Product";
// import Footer from "./component/Footer";
// import Login from "./component/Login";
// import Register from "./component/Register";
function App() {
  // const [login, setLogin] = useState(false);
  // const userLogin = (params) => {
  //   setLogin(params);
  //   console.log(params);
  // };

  // const getTokenUserLogin = (token) => {
  //   localStorage.setItem("access_token", token);
  //   console.log(token);
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("access_token")) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  // }, [login]);

  return (
    <HomePages />

    /* <HomePages login={login} userLogin={userLogin} /> 


      {login ? (
        <HomePages login={login} userLogin={userLogin} />
      ) : (
        // <Register />
        <Login
          login={login}
          userLogin={userLogin}
          getTokenUserLogin={getTokenUserLogin}
        />
      )} 
      ;
       <BrowserRouter>
        <MaterialSwitch>
          <Route exact path="/" component={Home} login={login}>
            <HomePages />
          </Route>
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Home />
        </MaterialSwitch>
      </BrowserRouter> */
  );
}

export default App;
