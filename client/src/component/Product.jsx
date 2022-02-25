import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

function Product({ idProduct }) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  // const {
  //   prod_brand,
  //   prod_category,
  //   prod_desc,
  //   rod_expire,
  //   prod_name,
  //   prod_price,
  //   prod_rating,
  //   prod_stock,
  //   prod_total_sold,
  //   prod_views,
  //   prod_weight,
  //   products_images,
  // } = product;

  // refrensi
  // useEffect(() => {
  //   const getProduct = async () => {
  //     setLoading(true);
  //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     setProduct(await response.json());
  //     setLoading(false);
  //   };
  //   getProduct();
  // }, []);

  // const getProduct = async () => {
  //   try {
  //     const result = await axios({
  //       setLoading: true,
  //       method: "GET",
  //       url: `http://localhost:3000/products/${id}`,
  //     });
  //     setProduct(result.data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="card mb-3 max-width: 540px">
          <div className="row g-0 d-flex justify-content-center">
            <div className="col-md-4 m-auto">
              {console.log(idProduct)}
              {/* belum ada integrasi multer */}
              {/* <img
                src={product.image}
                className="img-fluid rounded-start"
                alt={product.title}
                width="400px"
                height="400px"
              /> */}
              {/* <img
                src={products_images.map((image) => {
                  return `${image.prim_file_name}`;
                })}
                alt=""
                // style={{ width: "150px" }}
                className="card-img-top"
              /> */}
            </div>
            {/* <div className="col-md-6">
              <div className="card-body">
                <h1 className="text-black-50">{product.prod_category}</h1>
                <h5 className="card-title">{product.prod_name}</h5>
                <p className="card-text">{product.prod_desc}</p>
                <div className="col-md-6">
                  <h1 className="text-black-50">Rp.{product.prod_price}</h1>
                </div>
                <div className="buttons">
                  <Link to="" className="btn btn-outline-warning me-2">
                    <i className="fa fa-cart-plus me-1"></i>
                    Add to cart
                  </Link>
                  <Link to="/cart" className="btn btn-warning">
                    <i className="fa fa-shopping-cart me-1"></i>
                    Go to Cart
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row py-5 my-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Product;
