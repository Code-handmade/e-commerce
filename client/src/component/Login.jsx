import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="form my-5 mx-5 ">
          <div className="container justify-content-center">
            <div className="form-Login">
              <div className="row rounded-2">
                <div className="col-lg-5">
                  <img
                    src="/assets/login.jpg"
                    className="img-fluid Login-img me-2"
                    alt="hero"
                  />
                </div>
                <div className="col-lg-7 px-5 pt-5 ">
                  <h3 className="fw-bolder py-2 text-warning"> Sign In</h3>
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
                        />
                      </div>
                    </div>
                    <div className="from-row">
                      <div className="col-lg-7">
                        <button type="submit" className="btn2  my-2">
                          Login
                        </button>
                      </div>
                    </div>
                    <p className="my-2">
                      Dont't have an account <br />
                      <Link className="btn2-login" to="#">
                        Register here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
