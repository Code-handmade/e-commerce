import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Navbar({ login, userLogin }) {
  const loginHandler = (e) => {
    e.preventDefault();
    userLogin(!login);
  };
  const logoutHandler = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure ?",
      text: "Are you sure to log out?",
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Admin Handmade Collection
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/orders" className="nav-link">
                  Orders
                </Link>
              </li>

              <li className="nav-item">
                {login ? (
                  <button
                    onClick={(event) => logoutHandler(event)}
                    className="btn btn-dark nav-link"
                  >
                    LOGOUT
                  </button>
                ) : (
                  <Link
                    onClick={(event) => loginHandler(event)}
                    className="nav-link"
                  >
                    LOGIN
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
