import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Register, HomeUser, HomeAdmin, Cart } from "./pages";
import { Navbar } from "./components";

function App() {
  const [login, setLogin] = useState(false);

  const userLogin = (param) => {
    setLogin(param);
  };
  const getToken = (token, roleUser) => {
    localStorage.setItem("access_token", token);
    localStorage.setItem("roleUser", roleUser);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login]);

  return (
    <BrowserRouter>
      <Navbar login={login} userLogin={userLogin} />
      {login ? (
        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              {localStorage.getItem("access_token") && localStorage.getItem("roleUser") === "admin" ? (
                <HomeAdmin login={login} />
              ) : (
                <HomeUser login={login} />
              )}
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      ) : (
        <div className="container-fluid">
          <Switch>
            <Route exact path="/login">
              <Login login={login} userLogin={userLogin} getToken={getToken} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
