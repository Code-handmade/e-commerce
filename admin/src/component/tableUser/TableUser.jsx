import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function TableUser() {
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
          <div className="col-md">
            <table
              id="data"
              className="table table-striped table-responsive table-hover text-center width-100"
            >
              <thead className="table-dark">
                <tr>
                  <th>No.</th>
                  <th>Username</th>
                  <th>Email</th>
                  {/* <th>Password</th> */}
                  <th>Tanggal Lahir</th>
                  <th>Gender</th>
                  <th>Avatar</th>
                  <th>Role</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {/* <?php $no = 1; ?>
                        <?php foreach ($siswa as $row) : ?>
                            <tr>
                                <td><?= $no++; ?></td>
                                <td><?= $row['nama']; ?></td>
                                <td><?= $row['jekel']; ?></td>
                                <?php
                                $now = time();
                                $timeTahun = strtotime($row['tgl_Lahir']);
                                $setahun = 31536000;
                                $hitung = ($now - $timeTahun) / $setahun;
                                ?>
                                <td><?= floor($hitung); ?> Tahun</td>
                                <td><?= $row['jurusan']; ?></td> */}
                <tr>
                  <td>1</td>
                  <td>Hariyono</td>
                  <td>test@gmail.com</td>
                  <td>22/02/1999</td>
                  <td>Laki-laki</td>
                  <td>japan.png</td>
                  <td>admin</td>

                  <td>
                    <button className="btn btn-success btn-sm text-white detail fw-600">
                      <i className="bi bi-info-circle-fill"></i>&nbsp;Detail
                    </button>
                    |
                    <Link
                      to="/user/updateUser"
                      className="btn btn-warning btn-sm fw-600"
                    >
                      <i className="bi bi-pencil-square"></i>&nbsp;Ubah
                    </Link>
                    |
                    <Link className="btn btn-danger btn-sm fw-600">
                      <i className="bi bi-trash-fill"></i>&nbsp;Hapus
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableUser;
