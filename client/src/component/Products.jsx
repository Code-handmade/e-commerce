import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getProduct = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://localhost:3000/products/all",
      });
      if (componentMounted) {
        setProduct(result.data);
        setLoading(false);
      }
      console.log(result.data);
      return () => {
        componentMounted = false;
      };
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const filterProduct = (cat) => {
    const updatedList = product.filter((item) => item.prod_category === cat);
    setProduct(updatedList);
    console.log(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setProduct(product);
            }}
          >
            All
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("makanan");
            }}
          >
            Foods
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("furnitur");
            }}
          >
            Furnitures
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("pakaian");
            }}
          >
            Clothes
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("elektronik");
            }}
          >
            Electronic
          </div>
        </div>

        {/* {JSON.stringify(filter)} */}

        {product.map((item) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card h-100 p-4" key={item.id}>
                <img
                  src={item.products_images.map((image) => {
                    return `${image.prim_file_name}`;
                  })}
                  alt=""
                  // style={{ width: "150px" }}
                  className="card-img-top"
                />

                {/* {item.products_images.map((image) => {
                  console.log(`${image}`);
                })} */}

                <div className="card-body ">
                  <h5 className="card-title mb-0">
                    Nama Produk : {item.prod_name}
                  </h5>
                  <p className="card-text fw-bolder">
                    Kategori : {item.prod_category}
                  </p>
                  <p className="card-text fw-bolder">
                    {" "}
                    Harga : Rp {item.prod_price}
                  </p>

                  <p>
                    <span>
                      {" "}
                      <i className="fas fa-star text-warning"></i>{" "}
                      {item.prod_rating} <br />
                    </span>
                    <span>Dilihat :{item.prod_views} kali</span>
                  </p>
                  <Link
                    to={`/products/`}
                    className="btn btn-outline-primary "
                    idItem={item.id}
                  >
                    <i className="fa-solid fa-alicorn"></i>
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="container py-3 my-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">My Product</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
    // <>{JSON.stringify(filter)}</>
    // <ShowProducts />
  );
}

export default Products;
