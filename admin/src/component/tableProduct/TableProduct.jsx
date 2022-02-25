import "../../App.css";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function TableProduct() {
  const history = useHistory();
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

  const deleteProduct = (id) => {
    console.log("delete product");
    axios({
      method: "delete",
      url: `http://localhost:3000/products/delete/${id}`,
      params: {
        id,
      },
    })
      .then((result) => {
        getProduct();
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProductHandler = (id, productName, e) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure delete ${productName}??`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
      }
    });
    getProduct();
  };

  // const getProductImage = async () => {
  //   try {
  //     const productImage = await axios({
  //       type: "GET",
  //       url: "http://localhost:3000/images/",
  //     });
  //     setImage(productImage);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const getDetailProduct = (id) => {
  //   axios({
  //     type: "GET",
  //     url: `http://localhost:3000/images/`,
  //   })
  //     .then((result) => {
  //       const detailProduct = result.data;
  // detailProduct.map((x) => {
  //   return Swal.fire(
  //     <table key={x.id}>
  //       <tr>
  //         <td>{x.product.prod_name}</td>
  //       </tr>
  //     </table>
  //   );
  // });
  // for (let i = 0; i < detailProduct.length; i++) {
  //   if (detailProduct[i].id === id) {
  //     const {
  // prod_brand,
  // prod_category,
  // prod_desc,
  // prod_expire,
  // prod_name,
  // prod_price,
  // prod_rating,
  // prod_stock,
  // prod_total_sold,
  // prod_views,
  // prod_weight,
  //           } = detailProduct[i].product;
  //           Swal.fire(`Detail Product ${prod_views}`);
  //         }
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const detailPrductHandler = (id) => {
  //   getDetailProduct(id);
  // };

  useEffect(() => {
    getProduct();
    // getProductImage();
  }, []);

  const LoadingBar = () => {
    return <h1> Loading Data Product... </h1>;
  };

  let number = 1;
  return (
    <div className="container">
      <div className="d-flex flex-column min-vh-100">
        <div className="row my-2">
          <div className="col-md">
            <h3 className="text-center fw-bold text-uppercase">Data Product</h3>
            <hr />
            {/* {
              ((console.log(typeof image), console.log(image.data)),
              console.log(image.data))
            } */}
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md">
            <Link to="/product/addProduct" className="btn btn-primary">
              <i className="bi bi-person-plus-fill"> </i>&nbsp;Tambah Produk
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
                  <th> No. </th> <th> Gambar Product </th> <th> Nama </th>
                  <th> Harga </th> <th> Kategory </th> <th> Aksi </th>
                </tr>
              </thead>
              <tbody>
                {product.length === 0 ? (
                  <td>
                    <LoadingBar />
                  </td>
                ) : (
                  product.map((item) => {
                    return (
                      <tr key={item.id}>
                        {/* <td> {number++} </td> */}
                        <td>
                          {number++} <br />
                          id:{item.id}
                        </td>
                        <td>
                          <img
                            src={item.products_images.map((image) => {
                              return `${image.prim_file_name}`;
                            })}
                            alt=""
                            style={{ width: "150px" }}
                          />
                        </td>
                        <td> {item.prod_name} </td>
                        <td> Rp {item.prod_price}, 000 </td>
                        <td> {item.prod_category} </td>
                        <td>
                          {/* <button
                                                                                                                                            className="btn btn-success btn-sm text-white detail fw-600"
                                                                                                                                            onClick={() => detailPrductHandler(item.id)}
                                                                                                                                          >
                                                                                                                                            <i className="bi bi-info-circle-fill"></i>
                                                                                                                                            &nbsp;Detail
                                                                                                                                          </button> */}
                          <button className="btn btn-success btn-sm text-white detail fw-600">
                            <i className="bi bi-info-circle-fill"> </i> &nbsp;
                            Detail
                          </button>
                          |
                          <Link
                            to={"product/updateProduct/" + item.id}
                            className="btn btn-warning btn-sm fw-600"
                          >
                            <i className="bi bi-pencil-square"> </i> &nbsp; Ubah
                          </Link>
                          |
                          <button
                            className="btn btn-danger btn-sm fw-600"
                            onClick={() =>
                              deleteProductHandler(item.id, item.prod_name)
                            }
                          >
                            <i className="bi bi-trash-fill"> </i>&nbsp;Hapus
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

export default TableProduct;
