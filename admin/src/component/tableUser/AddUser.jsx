import React, { useState } from "react";
import "../../App.css";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function AddUser() {
  const history = useHistory();

  const [addUser, setAddUser] = useState({
    username: "",
    email: "",
    password: "",
    birth_date: null,
    gender: "",
    avatar:
      "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    type: "",
  });
  const addUserHandler = async () => {
    try {
      const token = localStorage.getItem("access_token");
      console.log("masuk addUserHandler");
      const result = await axios({
        method: "POST",
        url: "http://localhost:3000/users/auth/register",
        headers: {
          access_token: token,
        },
        data: addUser,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `User ${addUser.username} berhasil di tambahkan`,
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/user");
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addUserHandler();

    // kurang add image product
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        <div className="row my-2">
          <div className="col-md">
            <h3 className="fw-bold text-uppercase text-center mt-4">
              <i className="bi bi-person-plus-fill"></i>&nbsp;Tambah User
            </h3>
          </div>
          <hr />
        </div>
        <div className="row my-2">
          <div className="col-md d-flex justify-content-center mb-5">
            <form>
              <div className="mb-3">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control form-control-md w-100"
                  id="username"
                  placeholder="Masukkan Username"
                  name="username"
                  autocomplete="off"
                  required
                  onChange={(e) =>
                    setAddUser({ ...addUser, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control w-100"
                  id="email"
                  placeholder="Masukkan Email User"
                  name="email"
                  autocomplete="off"
                  required
                  onChange={(e) =>
                    setAddUser({ ...addUser, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control w-100"
                  id="password"
                  placeholder="Masukkan Password User"
                  name="password"
                  autocomplete="off"
                  required
                  onChange={(e) =>
                    setAddUser({ ...addUser, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label for="birth_day" className="form-label">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  className="form-control w-100"
                  id="birth_day"
                  name="birth_date"
                  max="01-01-2006"
                  required
                  onChange={(e) =>
                    setAddUser({ ...addUser, birth_date: e.target.value })
                  }
                />
              </div>
              <div className="from-row">
                <div className="col-lg-9 my-1 ">
                  <label className="text-black" htmlFor="gender">
                    Gender
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    name="gender"
                    onChange={(e) =>
                      setAddUser({ ...addUser, gender: e.target.value })
                    }
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="from-row">
                <div className="col-lg-9 my-1 ">
                  <label className="text-black" htmlFor="gender">
                    Role
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    required
                    name="type"
                    onChange={(event) => {
                      setAddUser({
                        ...addUser,
                        type: event.target.value,
                      });
                    }}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              {/* <div className="mb-3">
                <label for="gambar" className="form-label">
                  Gambar User
                </label>
                <input
                  className="form-control form-control-sm w-100"
                  id="gambar"
                  name="avatar"
                  type="file"
                />
              </div> */}

              <hr />
              <Link to="/user" className="btn btn-secondary me-3">
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

export default AddUser;
