import "../../App.css";
import axios from "axios";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function AddProductAdmin() {
  const history = useHistory();

  const [addProduct, setProduct] = useState({
    prod_name: null,
    prod_desc: null,
    prod_price: null,
    prod_stock: null,
    prod_expire: null,
    prod_weight: null,
    prod_category: null,
    prod_brand: null,
    prod_total_sold: null,
    prod_rating: null,
    prod_views: null,
  });

  const addProductHandler = async () => {
    try {
      const token = localStorage.getItem("access_token");
      console.log("masuk addProductHandler");
      const result = await axios({
        method: "POST",
        url: "http://localhost:4000/products/add",
        headers: {
          access_token: token,
        },
        data: addProduct,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Produk ${addProduct.prod_name} berhasil di tambahkan`,
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/");
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addProductHandler();

    // kurang add image product
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        <div className="row my-2">
          <div className="col-md">
            <h3 className="fw-bold text-uppercase text-center mt-4">
              <i className="bi bi-person-plus-fill"> </i>&nbsp;Tambah Produk
            </h3>
          </div>
          <hr />
        </div>
        <div className="row my-2">
          <div className="col-md d-flex justify-content-center mb-5">
            <form>
              <div className="mb-3">
                <label htmlFor="nama" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control form-control-md w-100"
                  id="nama"
                  placeholder="Masukkan Nama"
                  name="prod_name"
                  autoComplete="off"
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_name: event.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="harga" className="form-label">
                  Harga
                </label>
                <input
                  type="number"
                  className="form-control w-100"
                  id="harga"
                  placeholder="Masukkan Harga Produk"
                  name="prod_price"
                  autoComplete="off"
                  required
                  min={0}
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_price: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stok" className="form-label">
                  Stok Produk
                </label>
                <input
                  type="number"
                  className="form-control w-100"
                  id="stok"
                  placeholder="Masukkan Stok Produk"
                  name="prod_stock"
                  autoComplete="off"
                  min={0}
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
                <label htmlFor="epx" className="form-label">
                  Tanggal Kadaluarsa
                </label>
                <input
                  type="date"
                  className="form-control w-100"
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
                <label htmlFor="berat" className="form-label">
                  Berat Produk
                </label>
                <input
                  type="number"
                  className="form-control w-100"
                  id="berat"
                  placeholder="Masukkan Berat Produk"
                  name="prod_weight"
                  autoComplete="off"
                  required
                  min={0}
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_weight: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="brand" className="form-label">
                  Produk Category
                </label>
                <select
                  className="form-select w-100"
                  id="brand"
                  required
                  name="prod_category"
                  value={addProduct.prod_category}
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_category: event.target.value,
                    });
                  }}
                >
                  <option disabled selected value>
                    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
                    -- --Pilih Category-- -- -- -- -- -- -- -- -- -- -- -- -- --
                    -- -- -- -- -- -- -- --
                  </option>
                  <option value="makanan"> Makanan </option>
                  <option value="furnitur"> Furniture </option>
                  <option value="pakaian"> Pakaian </option>
                  <option value="elektronik"> Elektronik </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="brand" className="form-label">
                  Produk Brand
                </label>
                <select
                  className="form-select w-100"
                  id="brand"
                  name="prod_brand"
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_brand: event.target.value,
                    });
                  }}
                  value={addProduct.prod_brand}
                >
                  <option disabled selected value>
                    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
                    -- --Pilih Brand-- -- -- -- -- -- -- -- -- -- -- -- -- -- --
                    -- -- -- -- -- -- --
                  </option>
                  <option value="lokal"> Lokal </option>
                  <option value="nasional"> Nasional </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="sold" className="form-label">
                  Total Terjual
                </label>
                <input
                  type="number"
                  className="form-control w-100"
                  id="sold"
                  placeholder="Masukkan Produk Terjual"
                  name="prod_total_sold"
                  autoComplete="off"
                  required
                  min={1}
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_total_sold: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <input
                  type="number"
                  className="form-control w-100"
                  id="rating"
                  placeholder="Masukkan Rating Produk "
                  name=" prod_rating"
                  autoComplete="off"
                  required
                  max={5}
                  min={0}
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_rating: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="harga" className="form-label">
                  Views
                </label>
                <input
                  type="number"
                  className="form-control w-100"
                  id="sold"
                  placeholder="Masukkan Total di Lihat Produk "
                  name="prod_views"
                  autoComplete="off"
                  required
                  max={100}
                  min={10}
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_views: event.target.value,
                    });
                  }}
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="gambar" className="form-label">
                  Gambar Produk
                </label>
                <input
                  className="form-control form-control-sm w-100"
                  id="gambar"
                  name="gambar"
                  type="file"
                  onChange={handleUploadChange}
                />
              </div> */}
              <div className="mb-3">
                <label htmlFor="deskripsi" className="form-label">
                  Deskripsi Produk
                </label>
                <textarea
                  className="form-control w-100"
                  id="deskripsi"
                  rows="5"
                  name="prod_desc"
                  placeholder="Masukkan Deskripsi Product"
                  autoComplete="off"
                  required
                  onChange={(event) => {
                    setProduct({
                      ...addProduct,
                      prod_desc: event.target.value,
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

export default AddProductAdmin;