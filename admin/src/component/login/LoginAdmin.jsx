import "./LoginAdmin.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function LoginAdmin({ userLogin, getToken }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    loginAxios();
  };

  const loginAxios = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:3000/users/auth/login",
        data: state,
      });
      const access_token = result.data["access_token"];
      const roleUser = result.data["roleUser"];

      getToken(access_token, roleUser);
      userLogin(true);
    } catch (err) {
      Swal.fire("Role is not admin");
    }
  };

  return (
    <>
      <div className="form my-5 mx-5 ">
        <div className="container justify-content-center">
          <div className="form-Login">
            <div className="row rounded-2">
              <div className="col-lg-5">
                <img
                  src="/assets/admin.jpg"
                  className="img-fluid Login-img me-2"
                  alt="hero"
                />
              </div>
              <div className="col-lg-7 px-5 pt-5 ">
                <h3 className="fw-bolder py-2" style={{ color: "#09a28b" }}>
                  Login Admin
                </h3>
                <form>
                  <div className="from-row">
                    <div className="col-lg-7  ">
                      <label className="text-black" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        className="form-control "
                        name="email"
                        onChange={(event) => {
                          setState({ email: event.target.value });
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="from-row">
                    <div className="col-lg-7 my-1 ">
                      <label className="text-black" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="text"
                        placeholder="**********"
                        id="password"
                        className="form-control "
                        name="password"
                        required
                        onChange={(event) => {
                          setState({ ...state, password: event.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="from-row">
                    <div className="col-lg-7">
                      <button
                        onClick={(event) => {
                          submitHandler(event);
                        }}
                        type="submit"
                        className="btn2-admin  my-2"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
