import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
function Product() {
  

  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState([product]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getProducts = async () => {
    try {
      const product = await axios({
        method: "GET",
        url: API_URL+"images",
      });
      if (componentMounted) {
        setProduct(product.data);
        setFilter(product.data);
        setLoading(false);
      }
      console.log(product.data);
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
    const updatedList = product.filter((item) => item.product.prod_category === cat);
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
        {filter.map((item) => {
          return (
            // <>
            // {
            //   JSON.stringify(item.product)
            
            // }
            // </>
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4" key={item.id}>
                {/* TODO integrasi multer to img */}
                <img
                  src={item.prim_file_name}
                  class="card-img-top"
                  alt={item.prod_name}
                  height="150px"
                />
                <div class="card-body ">
                  {/* <h5 class="card-title mb-0">
                    {product.title.substring(0, 12)}
                  </h5> */}
                  <h5 class="card-title mb-0">{item.prod_name}</h5>
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

export default Product;
