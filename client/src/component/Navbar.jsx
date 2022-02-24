import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// function Navbar({ login, userLogin }) {
function Navbar() {
  // const loginHandler = (e) => {
  //   e.preventDefault();
  //   userLogin(true);
  // };

  // const logoutHandler = (event) => {
  //   event.preventDefault();
  //   Swal.fire({
  //     title: "Are you sure ?",
  //     text: "Are you sure to log out?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, log out!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       localStorage.clear();
  //       userLogin(false);
  //     }
  //   });
  // };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  bg-light shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4">
            Handmade Collection
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              {/* {login ? (
                <button
                  onClick={(event) => logoutHandler(event)}
                  className="btn btn-sm btn-danger"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={(event) => loginHandler(event)}
                  className="btn btn-sm btn-primary"
                >
                  Login
                </button>
              )} */}

              <Link to="/login" className="btn btn-outline-dark me-2">
                <i className="fa fa-sign-in me-1"></i>Login
              </Link>
              <Link to="/register" className="btn btn-outline-dark me-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </Link>
              <Link to="/cart" className="btn btn-outline-dark me-2">
                <i className="fa fa-cart-plus me-1"></i>Cart (0)
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
