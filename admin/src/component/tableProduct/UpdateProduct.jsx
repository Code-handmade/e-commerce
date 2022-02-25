import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

function UpdateProduct(props) {
  const history = useHistory();
  const [prefilForm, setPrefilForm] = useState([]);
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const product = await axios({
        method: "GET",
        url: "http://localhost:3000/products/all",
      });
      setProduct(product.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPrefillFrom = async () => {
    try {
      const getDataById = await axios({
        method: "GET",
        url: "http://localhost:3000/products/" + props.match.params.id,
      });
      setPrefilForm(getDataById.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProductById = async () => {
    try {
      const access_token = localStorage.getItem(" access_token");
      const result = await axios({
        method: "PUT",
        url: "http://localhost:3000/products/" + props.match.params.id,
        headers: {
          token: access_token,
        },
      });
      console.log(props.match.params.id);
      getProduct(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPrefillFrom();
    getProduct();
  }, []);

  const updateProductHandler = (e) => {
    e.preventDefault();
    updateProductById();
    history.push("/");
    console.log(updateProductById());
  };
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        <div className="row my-2">
          <div className="col-md col-md d-flex justify-content-center">
            <h3 className="fw-bold text-uppercase">
              <i className="bi bi-pencil-square"></i>&nbsp;Update Produk
            </h3>
          </div>
          <hr />
        </div>
        {JSON.stringify(prefilForm)}
        <div className="row my-2">
          <div className="col-md d-flex justify-content-center">
            <form>
              <div className="mb-3">
                <label for="nama" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control form-control-md w-100"
                  id="nama"
                  placeholder="Masukkan Nama"
                  name="prod_name"
                  autocomplete="off"
                  required
                  defaultValue={prefilForm.prod_name}
                  onChange={(e) => {
                    setPrefilForm.prod_name(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="harga" className="form-label">
                  Harga
                </label>
                <input
                  type="number"
                  className="form-control w-100"
                  id="harga"
                  placeholder="Masukkan Harga Produk"
                  name="prod_price"
                  autocomplete="off"
                  required
                  defaultValue={prefilForm.prod_price}
                />
              </div>
              <div className="mb-3">
                <label for="stok" className="form-label">
                  Stok Produk
                </label>
                <input
                  type="number"
                  className="form-control w-100"
                  id="stok"
                  placeholder="Masukkan Stok Produk"
                  name="prod_stock"
                  autocomplete="off"
                  required
                  defaultValue={prefilForm.prod_stock}
                />
              </div>
              <div className="mb-3">
                <label for="epx" className="form-label">
                  Tanggal Kadaluarsa
                </label>
                <input
                  type={{ date }}
                  timezone="[[timezone]]"
                  className="form-control w-100"
                  id="epx"
                  name="prod_expire"
                  max="01-01-2006"
                  required
                  defaultValue={prefilForm.prod_expire}
                />
              </div>

              <div className="mb-3">
                <label for="berat" className="form-label">
                  Berat Produk
                </label>
                <input
                  type="number"
                  className="form-control w-100"
                  id="berat"
                  placeholder="Masukkan Berat Produk"
                  name="prod_weight"
                  autocomplete="off"
                  required
                  defaultValue={prefilForm.prod_weight}
                />
              </div>

              <div className="mb-3">
                <label>Kategori Produk</label>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prod_category"
                    id="makanan"
                    value="makanan"
                    defaultChecked={prefilForm.prod_category}
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
                    value="furniture"
                    defaultChecked={prefilForm.prod_category}
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
                    value="pakaian"
                    defaultChecked={prefilForm.prod_category}
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
                    value="elektronik"
                    defaultChecked={prefilForm.prod_category}
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
                  className="form-select w-100"
                  id="brand"
                  name="prod_brand"
                  // defaultValue={prefilForm.filter(option => option.prod_brand === value}
                >
                  <option disabled selected value>
                    --------------------------------------------Pilih
                    Brand--------------------------------------------
                  </option>
                  <option value="lokal jaya">Lokal Jaya</option>
                  <option value="Idola">Idola</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="gambar" className="form-label">
                  Gambar Produk
                </label>
                <input
                  className="form-control form-control-sm w-100"
                  id="gambar"
                  name="gambar"
                  type="file"
                  // defaultValue={prefilForm.products_images.prim_file_name}
                />
              </div>
              <div className="mb-3">
                <label for="deskripsi" className="form-label">
                  Deskripsi Produk
                </label>
                <textarea
                  className="form-control w-100"
                  id="deskripsi"
                  rows="5"
                  name="prod_desc"
                  placeholder="Masukkan Alamat"
                  autocomplete="off"
                  required
                  defaultValue={prefilForm.prod_desc}
                ></textarea>
              </div>
              <hr />
              <Link className="btn btn-secondary me-3" to="/">
                Kembali
              </Link>
              <button
                onClick={(e) => {
                  updateProductHandler();
                }}
                type="submit"
                className="btn btn-success"
                name="simpan"
              >
                Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(UpdateProduct);
