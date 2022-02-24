import React from "react";
import { Link } from "react-router-dom";

function HomeAdmin({login}) {
  return (
    <div className="container">
      <h2>Home Admin</h2>
    </div>
    // <div className="d-flex flex-column min-vh-100">
    //   <div className="hero">
    //     <div className="card bg-dark text-white border-0">
    //       <img
    //         src="/assets/bg-handmade-hero.jpg"
    //         className="card-img"
    //         alt="Background"
    //         height="600px"
    //       />
    //       <div className="card-img-overlay d-flex flex-column justify-content-center">
    //         <div className="container">
    //           <h5 className="card-title display-3 fw-bolder mb-0">
    //             Handmade Collection
    //           </h5>
    //           {/* <p>{JSON.stringify(login)}</p> */}
    //           <p className="card-text lead fs-2">
    //             Lorem ipsum dolor sit amet, consectetur
    //           </p>
    //           {/* <p className="card-text">Last updated 3 mins ago</p> */}
    //           <div className="buttons-hero">
    //             <Link to="/login" className="btn btn-warning me-2">
    //               <i className="fa fa-shopping-bag me-1"></i>
    //               <i class="fa-solid fa-alicorn"></i>Order Now
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <Product /> */}
    //   </div>
    // </div>
  );
}

export default HomeAdmin;
