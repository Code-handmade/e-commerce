import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-auto">
      <div className="container-fluid bg-dark m-0 h">
        <div className="container bg-dark text-white pt-5 pb-400">
          <div className="row text-md-left">
            <div className="col-md-3 col-lg-3 text-center col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bolder text-warning">
                compani name
              </h5>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                minima reiciendis aliquam laudantium a impedit voluptatem quidem
                et iure ratione inventore corrupti possimus similique veritatis
                molestiae reprehenderit officia, cumque nemo quod labore atque.
              </p>
            </div>
            <div className="col-md-3 col-lg-3 text-center col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bolder text-warning">
                Site Map
              </h5>
              <p>
                <Link className="text-white" to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/products">
                  Products
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/about">
                  About
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/contact">
                  Contact
                </Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-3 text-center col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bolder text-warning">
                Products
              </h5>
              <p>
                <Link className="text-white" to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/products">
                  Products
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/about">
                  About
                </Link>
              </p>
              <p>
                <Link className="text-white" to="/contact">
                  Contact
                </Link>
              </p>
            </div>
            <div className="col-md-3 col-lg-3 text-center col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 fw-bolder text-warning">
                Contact
              </h5>
              <p className="text-white">
                <i className="fa fa-home me-1 fa-2x"></i>
                PT Handmade Collection
              </p>
              <p className="text-white">
                <i className="fa fa-envelope me-1 fa-2x"></i>
                HandmadeCollection@gmail.com
              </p>
              <p className="text-white">
                <i mr-3 className="fa fa-map-marker fa-2x me-1"></i>
                Semarang, Jawa Tengah
              </p>
              <p className="text-white">
                <i className="fa fa-phone me-1 fa-2x"></i>
                +62 888 888 999 123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
