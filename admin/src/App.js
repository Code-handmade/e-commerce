import React, { useState, useEffect } from "react";
import LoginAdmin from "./component/login/LoginAdmin";
import MainSection from "./component/main-section/MainSection";

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
    <div>
      {login ? (
        <MainSection login={login} userLogin={userLogin} />
      ) : (
        <LoginAdmin login={login} userLogin={userLogin} getToken={getToken} />
      )}
    </div>
  );
}

export default App;
