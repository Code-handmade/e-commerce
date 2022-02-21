import React from "react";
import "../../App.css";
function Footer() {
  return (
    <div className="mt-auto">
      <div className="container-fluid">
        <div className="row bg-dark text-white">
          <div className="col-md-6 my-2">
            <h4 className="fw-bold text-uppercase">About</h4>
            <p className="me-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae dolore sed porro modi mollitia quaerat? Nam, error
              fugit sed, maiores illum architecto, officiis voluptate nesciunt
              voluptatibus aut reprehenderit perspiciatis doloremque!
            </p>
          </div>
          <div className="col-md-6 my-2 text-center link">
            <h4 className="fw-bold text-uppercase">Account Links</h4>
            <a href="https://web.facebook.com//" target="_blank">
              <i className="bi bi-facebook fs-3"></i>
            </a>
            <a href="https://github.com/" target="_blank">
              <i className="bi bi-github fs-3"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="bi bi-instagram fs-3"></i>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <i className="bi bi-twitter fs-3"></i>
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white text-center p-1 mt-auto">
        <p>
          Copyright &copy; by{" "}
          <a
            href="https://instagram.com/"
            target="_blank"
            className="text-white"
          >
            Handmade Collection
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
