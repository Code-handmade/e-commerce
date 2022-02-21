import React, { useState, useEffect } from "react";
import LoginAdmin from "./component/login/LoginAdmin";
import MainSection from "./component/main-section/MainSection";
import { Switch, Route } from "react-router-dom";
import RegisterAdmin from "./component/registerAdmin/RegisterAdmin";

function App() {
  const [login, setLogin] = useState(false);
  const userLogin = (params) => {
    setLogin(params);
  };

  const getToken = (token, userRole) => {
    localStorage.setItem("access_token", token);
    localStorage.setItem("userRole", userRole);
  };

  useEffect(() => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("userRole") === "admin"
    ) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login]);
  return (
    <>
      {login ? (
        <MainSection login={login} userLogin={userLogin} />
      ) : (
        <Switch>
          <Route exact path="/login">
            <div className="m-auto">
              <LoginAdmin
                login={login}
                userLogin={userLogin}
                getToken={getToken}
              />
            </div>
          </Route>
          <Route exact path="/registerAdmin">
            <div className="m-auto">
              <RegisterAdmin />
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
