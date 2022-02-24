import React from "react";
import { Switch, Route } from "react-router-dom";
import { RegisterAdmin } from "../registerAdmin/RegisterAdmin";
import { LoginAdmin } from "../login/LoginAdmin";
function SectionLoginReg({ login, userLogin, getToken }) {
  return (
    <div>
      <Switch>
        <Route exact path="/registerAdmin">
          <div className="m-auto">
            <RegisterAdmin />
          </div>
        </Route>
        <Route exact path="/registerAdmin">
          <div className="m-auto">
            <LoginAdmin
              login={login}
              userLogin={userLogin}
              getToken={getToken}
            />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default SectionLoginReg;
