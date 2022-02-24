import "../../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TableProduct() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const product = await axios({
        method: "GET",
        url: "http://localhost:3000/images",
      });
      setProduct(product.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const LoadingBar = () => {
    return <h1>Loading Data Product ...</h1>;
  };

  let number = 1;
  return (
    <div className="container">
      <div className="d-flex flex-column min-vh-100">
        <div className="row my-2">
          <div className="col-md">
            <h3 className="text-center fw-bold text-uppercase">Data Product</h3>
            <hr />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md">
            <Link to="/product/addProduct" className="btn btn-primary">
              <i className="bi bi-person-plus-fill"></i>&nbsp;Tambah Produk
            </Link>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md">
            <table
              id="data"
              className="table table-striped table-responsive table-hover text-center width-100"
            >
              <thead className="table-dark">
                <tr>
                  <th>No.</th>
                  <th>Gambar Product</th>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Kategory</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {product.length === 0 ? (
                  <LoadingBar />
                ) : (
                  product.map((item) => {
                    return (
                      <tr>
                        <td>{number++}</td>
                        <td>
                          <img
                            src={item.prim_file_name}
                            alt={item.prim_file_name}
                            style={{ width: "150px" }}
                          />
                        </td>
                        <td>{item.product.prod_name}</td>
                        <td>{item.product.prod_price}</td>
                        <td>{item.product.prod_category}</td>

                        <td>
                          <button className="btn btn-success btn-sm text-white detail fw-600">
                            <i className="bi bi-info-circle-fill"></i>
                            &nbsp;Detail
                          </button>
                          |
                          <Link
                            to="product/updateProduct"
                            className="btn btn-warning btn-sm fw-600"
                          >
                            <i className="bi bi-pencil-square"></i>&nbsp;Ubah
                          </Link>
                          |
                          <button className="btn btn-danger btn-sm fw-600">
                            <i className="bi bi-trash-fill"></i>&nbsp;Hapus
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableProduct;
