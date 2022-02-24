import React from 'react'
import { Link } from "react-router-dom";

function CardProduct(props) {
  const { 
    id,
    prod_name, 
    prod_price, 
    prod_desc, 
    prod_stock,
    total_sold,
    prod_category,  
    rating, 
    views,
    products_images
} = props.product;

  return (
    <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={id}>
                <img
                  src = {products_images}
                  className="card-img-top"
                  alt={prod_name}
                  height="150px"
                />
                <div className="card-body ">
                  <h5 className="card-title mb-0">{prod_name}</h5>
                  <p className="card-text fw-bolder">
                    Rp {prod_price}
                  </p>
                  <p className="card-text fw-bolder">
                     {prod_desc}
                  </p>
                  <Link
                    to={`/products/${id}`}
                    className="btn btn-outline-primary"
                  >
                    <i className="fa-solid fa-alicorn"></i>
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
  )
}

export default CardProduct