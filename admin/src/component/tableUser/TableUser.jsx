import "../../App.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
function TableUser() {
  const history = useHistory();
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const user = await axios({
        method: "GET",
        url: "http://localhost:3000/users/all",
      });
      setUser(user.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = (id) => {
    console.log("delete user");
    axios({
      method: "delete",
      url: `http://localhost:3000/users/delete/${id}`,
      params: {
        id,
      },
    })
      .then((result) => {
        getUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUserHandler = (id, username) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure delete ${username}??`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        history.push("/user");
      }
    });
    getUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  const LoadingBar = () => {
    return <h1>Loading Data Users ...</h1>;
  };

  let number = 1;
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
        <div className="row my-2">
          <div className="col-md">
            <h3 className="text-center fw-bold text-uppercase">Data User </h3>
          </div>
        </div>
        <hr />
        <div className="row my-2">
          <div className="col-md">
            <Link to="/user/addUser" className="btn btn-primary">
              <i className="bi bi-person-plus-fill"></i>&nbsp;Tambah User
            </Link>
          </div>
        </div>
        <div className="row my-3">
          <div className="container col-md">
            <table
              id="data"
              className="table table-striped table-responsive table-hover text-center "
            >
              <thead className="table-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  {/* <th>Password</th> */}
                  <th scope="col">Tanggal Lahir</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Avatar</th>
                  <th scope="col">Role</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {user.length === 0 ? (
                  <LoadingBar />
                ) : (
                  user.map((pengguna) => {
                    return (
                      <tr key={pengguna.id}>
                        <td>{number++}</td>
                        <td>{pengguna.username}</td>
                        <td>{pengguna.email}</td>
                        <td>{pengguna.birth_date}</td>
                        <td>{pengguna.gender}</td>
                        <td>
                          {" "}
                          <img
                            src={pengguna.avatar}
                            alt={pengguna.username}
                            style={{ width: "150px" }}
                          />
                        </td>
                        <td>{pengguna.role}</td>

                        <td>
                          <button className="btn btn-success btn-sm text-white detail fw-600">
                            <i className="bi bi-info-circle-fill"></i>
                            &nbsp;Detail
                          </button>
                          |
                          <Link
                            to="/user/updateUser"
                            className="btn btn-warning btn-sm fw-600"
                          >
                            <i className="bi bi-pencil-square"></i>&nbsp;Ubah
                          </Link>
                          |
                          <button
                            onClick={() =>
                              deleteUserHandler(pengguna.id, pengguna.username)
                            }
                            className="btn btn-danger btn-sm fw-600"
                          >
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

export default TableUser;
