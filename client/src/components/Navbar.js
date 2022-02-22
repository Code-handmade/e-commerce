import React from "react";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Navbar({ login, userLogin }) {
  const loginHandler = (e) => {
    e.preventDefault();
    userLogin(true);
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    Swal.fire({
      title: ":(",
      text: "Are you sure to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        userLogin(false);
      }
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            {login ? (
              <button onClick={(e) => logoutHandler(e)} className="btn btn-sm btn-outline-danger">Logout</button>
            ) : (
              <button
                onClick={(e) => loginHandler(e)}
                className="btn btn-outline-success"
                type="submit"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
