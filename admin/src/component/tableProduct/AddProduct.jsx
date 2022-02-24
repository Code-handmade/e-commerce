import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function AddProduct() {
  const [addProduct, setProduct] = useState({
    prod_name: "",
    prod_desc: "",
    prod_price: "",
    prod_stock: "",
    prod_expire: "",
    prod_weight: "",
    prod_category: "",
    prod_brand: "",
  });

  const addProductHandler = async () => {
    try {
      const token = localStorage.getItem("access_token");
      console.log(token);
      const result = await axios({
        method: "post",
        url: "http://localhost:3000/products/add",
        headers: {
          access_token: token,
        },
        data: addProduct,
      });
      console.log(result.data);
      console.log(token);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addProductHandler();
    // kurang add image product
    console.log(addProduct);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        <div className="row my-2">
          <div className="col-md">
            <h3 className="fw-bold text-uppercase">
              <i className="bi bi-person-plus-fill"></i>&nbsp;Tambah Produk
            </h3>
          </div>
          <hr />
        </div>
        <div className="row my-2">
          <div className="col-md">
            <form>
              <div className="mb-3">
                <label for="nama" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control form-control-md w-50"
                  id="nama"
                  placeholder="Masukkan Nama"
                  name="prod_name"
                  autoComplete="off"
                  required
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_name: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="harga" className="form-label">
                  Harga
                </label>
                <input
                  type="number"
                  className="form-control w-50"
                  id="harga"
                  placeholder="Masukkan Harga Produk"
                  name="prod_price"
                  autoComplete="off"
                  required
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_price: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="stok" className="form-label">
                  Stok Produk
                </label>
                <input
                  type="number"
                  className="form-control w-50"
                  id="stok"
                  placeholder="Masukkan Stok Produk"
                  name="prod_stock"
                  autoComplete="off"
                  required
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_stock: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="epx" className="form-label">
                  Tanggal Kadaluarsa
                </label>
                <input
                  type="date"
                  className="form-control w-50"
                  id="epx"
                  name="prod_expire"
                  max="01-01-2006"
                  required
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_expire: event.target.value,
                    });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="berat" className="form-label">
                  Berat Produk
                </label>
                <input
                  type="number"
                  className="form-control w-50"
                  id="berat"
                  placeholder="Masukkan Berat Produk"
                  name="prod_weight"
                  autoComplete="off"
                  required
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_weight: event.target.value,
                    });
                  }}
                />
              </div>

              <div className="mb-3">
                <label>Kategori Produk</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prod_category"
                    id="makanan"
                    // value="makanan"
                    onChange={(event) => {
                      setProduct({
                        ...addProduct,
                        prod_category: event.target.value,
                      });
                    }}
                  />
                  <label className="form-check-label" for="makanan">
                    Makanan
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prod_category"
                    id="furniture"
                    // value="furniture"
                    onChange={(event) => {
                      setProduct({
                        ...addProduct,
                        prod_category: event.target.value,
                      });
                    }}
                  />
                  <label className="form-check-label" for="furniture">
                    Furnitur
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prod_category"
                    id="pakaian"
                    // value="pakaian"
                    onChange={(event) => {
                      setProduct({
                        ...addProduct,
                        prod_category: event.target.value,
                      });
                    }}
                  />
                  <label className="form-check-label" for="pakaian">
                    Pakaian
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prod_category"
                    id="elektronik"
                    // value="elektronik"
                    onChange={(event) => {
                      setProduct({
                        ...addProduct,
                        prod_category: event.target.value,
                      });
                    }}
                  />
                  <label className="form-check-label" for="elektronik">
                    Elektronik
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label for="brand" className="form-label">
                  Produk Brand{" "}
                </label>
                <select
                  className="form-select w-50"
                  id="brand"
                  name="prod_brand"
                >
                  <option disabled selected value>
                    --------------------------------------------Pilih
                    Brand--------------------------------------------
                  </option>
                  <option
                    onChange={(event) => {
                      setProduct({
                        ...addProduct,
                        prod_brand: event.target.value,
                      });
                    }}
                    // value="lokal jaya"
                  >
                    Lokal Jaya
                  </option>
                  <option
                    onChange={(event) => {
                      setProduct({
                        ...addProduct,
                        prod_brand: event.target.value,
                      });
                    }}
                    // value="Idola"
                  >
                    Idola
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label for="gambar" className="form-label">
                  Gambar Produk
                </label>
                <input
                  className="form-control form-control-sm w-50"
                  id="gambar"
                  name="gambar"
                  type="file"
                />
              </div>
              <div className="mb-3">
                <label for="deskripsi" className="form-label">
                  Deskripsi Produk
                </label>
                <textarea
                  className="form-control w-50"
                  id="deskripsi"
                  rows="5"
                  name="prod_desc"
                  placeholder="Masukkan Alamat"
                  autoComplete="off"
                  required
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_brand: event.target.value,
                    });
                  }}
                ></textarea>
              </div>
              <hr />
              <Link to="/" className="btn btn-secondary me-3 ">
                Kembali
              </Link>
              <button
                onClick={(event) => {
                  submitHandler(event);
                }}
                type="submit"
                className="btn btn-success"
                name="simpan"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
