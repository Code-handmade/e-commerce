import React from "react";
// import Products from "./Products";
// import Product from "./Products";
import {
  Navbar
} from '../components'
import { Switch, Route } from "react-router-dom";
import { HomeAdmin } from ".";


function MainPage({login, userLogin}) {
  return (
    <div>
      <Navbar login={login} userLogin={userLogin}/>
      <Switch>
        <Route>
          <HomeAdmin login={login}/>
        </Route>
      </Switch>
    </div>
  );
}

export default MainPage;