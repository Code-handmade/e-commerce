import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function AddProduct() {
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
                  autocomplete="off"
                  required
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
                  autocomplete="off"
                  required
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
                  autocomplete="off"
                  required
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
                  autocomplete="off"
                  required
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
                    value="makanan"
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
                  <option value="lokal jaya">Lokal Jaya</option>
                  <option value="Idola">Idola</option>
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
                  autocomplete="off"
                  required
                ></textarea>
              </div>
              <hr />
              <Link to="/" className="btn btn-secondary me-3 ">
                Kembali
              </Link>
              <button type="submit" className="btn btn-success" name="simpan">
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
