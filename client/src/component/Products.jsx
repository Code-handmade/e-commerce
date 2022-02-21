import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Products() {
  // const [data, setData] = useState([]);
  // const [filter, setFilter] = useState([data]);
  // const [loading, setLoading] = useState(false);
  // let componentMounted = true;

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     if (componentMounted) {
  //       setData(await response.clone().json());
  //       setFilter(await response.json());
  //       setLoading(false);
  //       console.log(filter);
  //     }
  //     console.log(response);
  //     return () => {
  //       componentMounted = false;
  //     };
  //   };
  //   getProducts();
  // }, []);

  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState([product]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getProducts = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://localhost:3000/products/all",
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
    const updatedList = product.filter((item) => item.prod_category === cat);
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
              setFilter(product);
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
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4" key={product.id}>
                {/* TODO integrasi multer to img */}
                {/* <img
                  src={product.image}
                  class="card-img-top"
                  alt={"product.title"}
                  height="150px"
                /> */}
                <div class="card-body ">
                  {/* <h5 class="card-title mb-0">
                    {product.title.substring(0, 12)}
                  </h5> */}
                  <h5 class="card-title mb-0">{product.prod_name}</h5>
                  <p class="card-text fw-bolder">Rp {product.prod_category}</p>
                  <p class="card-text fw-bolder">Rp {product.prod_price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    class="btn btn-outline-primary"
                  >
                    <i class="fa-solid fa-alicorn"></i>
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
  );
}

export default Products;
