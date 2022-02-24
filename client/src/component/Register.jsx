import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Register() {
  const [image, setImage] = useState("");
  const [saveImage, setSaveImage] = useState(null);

  const uploadImageHandler = (e) => {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    console.log(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  };
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="form my-4 mx-5 justify-content-center align-items-center">
          <div className="container">
            <div className="form-register">
              <div className="row rounded-2">
                <div className="col-lg-7 bg-img-side-left ">
                  <img
                    src="/assets/register.jpg"
                    className="img-fluid signUp-img me-2"
                    alt="hero"
                    // width="100%"
                  />
                </div>
                <div className="col-lg-5 px-5 pt-5">
                  <h3 className="fw-bolder py-2 text-warning"> Sign Up</h3>
                  <form>
                    <div className="from-row">
                      <div className="col-lg-9  ">
                        <label className="text-black" htmlFor="username">
                          Username
                        </label>
                        <input
                          type="text"
                          placeholder="Username"
                          id="username"
                          className="form-control "
                          required
                          name="username"
                        />
                      </div>
                    </div>
                    <div className="from-row">
                      <div className="col-lg-9 my-1 ">
                        <label className="text-black" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          id="email"
                          className="form-control "
                          required
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="from-row">
                      <div className="col-lg-9 my-1 ">
                        <label className="text-black" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="text"
                          placeholder="**********"
                          id="password"
                          className="form-control "
                          required
                          name="password"
                        />
                      </div>
                    </div>
                    <div className="from-row">
                      <div className="col-lg-9 my-1 ">
                        <label className="text-black" htmlFor="birthday">
                          Birthday
                        </label>
                        <input
                          type="date"
                          placeholder=""
                          id="birthday"
                          className="form-control "
                          required
                          name="birth_date"
                        />
                      </div>
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
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                    </div>

                    <div className="from-row">
                      <img className=" uplod-img" src={image} alt="" />
                      <div className="col-lg-9 my-1 ">
                        <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">
                            Image
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            onChange={uploadImageHandler}
                            accept="image/*"
                            required
                            type="avatar"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="from-row">
                      <div className="col-lg-9">
                        <button type="submit" className="btn2  my-2">
                          Register
                        </button>
                      </div>
                    </div>
                    <p className="my-2">
                      Do you have account? <br />
                      <Link className="btn2-login" to="/login">
                        Sign in
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
