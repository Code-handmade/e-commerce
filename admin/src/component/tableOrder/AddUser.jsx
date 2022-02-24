import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function AddUser() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        <div className="row my-2">
          <div className="col-md">
            <h3 className="fw-bold text-uppercase">
              <i className="bi bi-person-plus-fill"></i>&nbsp;Tambah User
            </h3>
          </div>
          <hr />
        </div>
        <div className="row my-2">
          <div className="col-md">
            <form>
              <div className="mb-3">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control form-control-md w-50"
                  id="username"
                  placeholder="Masukkan Username"
                  name="username"
                  autocomplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control w-50"
                  id="email"
                  placeholder="Masukkan Email User"
                  name="email"
                  autocomplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control w-50"
                  id="password"
                  placeholder="Masukkan Password User"
                  name="password"
                  autocomplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="birth_day" className="form-label">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  className="form-control w-50"
                  id="birth_day"
                  name="birth_date"
                  max="01-01-2006"
                  required
                />
              </div>

              <div className="mb-3">
                <label>Jenis Kelamin</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="laki"
                    value="laki-laki"
                  />
                  <label className="form-check-label" for="laki">
                    Laki-laki
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="perempuan"
                    value="perempuan"
                  />
                  <label className="form-check-label" for="perempuan">
                    Perempuan
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label for="role" className="form-label">
                  Role
                </label>
                <select className="form-select w-50" id="role" name="type">
                  <option disabled selected value>
                    --------------------------------------------Pilih
                    Role--------------------------------------------
                  </option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="gambar" className="form-label">
                  Gambar User
                </label>
                <input
                  className="form-control form-control-sm w-50"
                  id="gambar"
                  name="avatar"
                  type="file"
                />
              </div>

              <hr />
              <Link to="/user" className="btn btn-secondary me-3">
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

export default AddUser;
