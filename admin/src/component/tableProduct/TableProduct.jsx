import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function TableProduct() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container">
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
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Kategory</th>
                  <th>Brand</th>
                  <th>Deskripsi</th>
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
                  <td>Celana</td>
                  <td>20000</td>
                  <td>2</td>
                  <td>Pakaian</td>
                  <td>Lokal jaya</td>
                  <td>Idola</td>

                  <td>
                    <button className="btn btn-success btn-sm text-white detail fw-600">
                      <i className="bi bi-info-circle-fill"></i>&nbsp;Detail
                    </button>{" "}
                    |
                    <Link
                      to="product/updateProduct"
                      className="btn btn-warning btn-sm fw-600"
                    >
                      <i className="bi bi-pencil-square"></i>&nbsp;Ubah
                    </Link>{" "}
                    |
                    <button className="btn btn-danger btn-sm fw-600">
                      <i className="bi bi-trash-fill"></i>&nbsp;Hapus
                    </button>
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

export default TableProduct;
