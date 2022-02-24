import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "../../utils/constants";
import { CardProduct } from "../../components";

function HomeUser() {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState([product]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const getProducts = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: API_URL+"products/all",
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
    const updatedList = product.filter(
      (item) => item.prod_category === cat
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
            <CardProduct key={product.id} product={product}/>
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

export default HomeUser;