import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { ModalOrder } from "../../components";
import "./Details.css";
// import { URL } from '../../utils/config';
// import { URL_IMAGE } from '../../utils/config';
import { API_URL } from "../../utils/constants";
import { AddBoxOutlined, ShoppingCartOutlined } from "@material-ui/icons";

// Fungsi untuk membuat product DetailsRename
function DetailsRename({ login }) {
  const params = useParams();
  //    console.log(params);
  const [product, setProduct] = useState({});

  const id = +params.id;
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      let result = await axios({
        method: "GET",
        url: API_URL + `products/${id}`,
      });
      setProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="container">
        <h3 className="mt-20 text-center fw-bold">Detail Product</h3>
        <div className="card-details pt-5 pt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <img
                src={product.prod_name}
                className="card-img-top rounded lazyload"
                alt="Foto Produk Detail"
              />
              <ul className="list-group list-group-flush mt-20">
                <li className="list-group-item">
                  <h4 className="card-title mb-4 fw-bold">
                    {product.prod_name}
                  </h4>
                  {/* <small><i class="fa-solid fa-user-check"></i> Dijual Oleh: {product.user.username}</small> */}
                </li>
                <li className="list-group-item fw-medium">
                  {" "}
                  <h5>
                    <i className="fa-solid fa-money-bill-wave"></i> IDR.{" "}
                    {product.prod_price}
                  </h5>
                </li>
                <li className="list-group-item fw-medium">
                  <div className="d-flex gap-4">
                    <span>
                      <i class="fa-solid fa-folder-minus"></i>{" "}
                      {product.prod_total_sold} Unit terjual
                    </span>
                    <span>
                      <i className="fa-solid fa-business-time"></i>{" "}
                      {product.prod_stock} Unit tersisa
                    </span>
                  </div>
                </li>
                <li className="list-group-item fw-medium">
                  <div className="d-flex gap-4">
                    <span>
                      <i className="fa-solid fa-star"></i> {product.prod_rating}{" "}
                      Kali dinilai
                    </span>
                    <span>
                      <i className="fa-solid fa-eye"></i> {product.prod_views}{" "}
                      Kali dilihat
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <ul className="list-group list-group-flush">
                <div className="row">
                  <div className="col-md-8 mt-20">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item fw-medium">
                        Kategori: {product.prod_category}
                      </li>
                      <li className="list-group-item fw-medium">
                        Brand: {product.prod_brand}
                      </li>
                      <li className="list-group-item fw-medium">
                        Berat Barang: {product.prod_weight}
                      </li>
                      <li className="list-group-item fw-medium">
                        Expire Date: <i>{product.prod_expire}</i>
                      </li>
                    </ul>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item fw-medium">
                        {product.prod_desc}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Logic belum aktif */}

                {openModal && (
                  <ModalOrder
                    setOpenModal={setOpenModal}
                    productName={product.prod_name}
                    productId={product.id}
                    productPrice={product.prod_price}
                    productStock={product.prod_stock}
                  />
                )}
                <div id="btn-cart" className="">
                  <button
                    className="btn btn-lg btn-success fw-bold rounded-pill w-50 openModal mb-2"
                    onClick={() => setOpenModal(true)}
                    key={id}
                  >
                    <ShoppingCartOutlined />
                    Cart
                  </button>
                </div>
                <div id="btn-buy" className="">
                  <button
                    className="btn btn-lg btn-success fw-bold rounded-pill w-50 openModal"
                    onClick={() => setOpenModal(true)}
                    key={id}
                  >
                    <AddBoxOutlined /> Order
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsRename;
