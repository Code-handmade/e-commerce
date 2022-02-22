import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [Product, setProduct] = useState([]);
  const [filter, setFilter] = useState([Product]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getProducts = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://localhost:3000/images",
      });
      if (componentMounted) {
        setProduct(result.data);
        setFilter(result.data);
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
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const filterProduct = (cat) => {
    const updatedList = Product.filter(
      (item) => item.product.prod_category === cat
    );
    setFilter(updatedList);
    console.log(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setFilter(Product);
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
        {filter.map((item) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4" key={item.id}>
                <img
                  src={item.prim_file_name}
                  className="card-img-top"
                  alt={item.prim_file_name}
                  height="150px"
                />
                <div className="card-body ">
                  <h5 className="card-title mb-0">{item.product.prod_name}</h5>
                  <p className="card-text fw-bolder">
                    Rp {item.product.prod_category}
                  </p>
                  <p className="card-text fw-bolder">
                    Rp {item.product.prod_price}
                  </p>
                  <Link
                    to={`/products/${item.product.id}`}
                    className="btn btn-outline-primary"
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
