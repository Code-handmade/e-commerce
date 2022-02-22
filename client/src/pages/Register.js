import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import "./Login.css";
import Swal from "sweetalert2";

function Register() {
  // const [image, setImage] = useState("");
  // const [saveImage, setSaveImage] = useState(null);
  const [form, setForm] = useState({
    username:"",
    email:"",
    password:"",
    birth_date:"",
    gender:"",
    avatar:"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    type:"user"
  })

  const submitHandler = e =>{
    console.log(form);
    e.preventDefault()
    registerAxios()
  }

  const registerAxios = async() =>{
    try {
      const result = await axios({
        method: "POST",
        url:API_URL+"users/auth/register",
        data:form
      })
      console.log(result.data)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your account succes to register',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (e) {
      console.log(e);
    }
  }

  // const uploadImageHandler = (e) => {
  //   console.log(e.target.files[0]);
  //   let uploaded = e.target.files[0];
  //   setImage(URL.createObjectURL(uploaded));
  //   console.log(URL.createObjectURL(uploaded));
  //   setSaveImage(uploaded);
  // };
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
                    <div className="form-row">
                      <div className="col-lg-9  ">
                        <label className="text-black" htmlFor="username">
                          Username
                        </label>
                        <input
                          type="text"
                          placeholder="Username"
                          id="username"
                          className="form-control"
                          onChange={(e)=> setForm({...form, username:e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-lg-9 my-1 ">
                        <label className="text-black" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          id="email"
                          className="form-control"
                          onChange={(e)=> setForm({...form, email:e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-lg-9 my-1 ">
                        <label className="text-black" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="text"
                          placeholder="**********"
                          id="password"
                          className="form-control "
                          onChange={(e)=> setForm({...form, password:e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-lg-9 my-1 ">
                        <label className="text-black" htmlFor="birth_date">
                          Birthday
                        </label>
                        <input
                          type="date"
                          placeholder=""
                          id="birth_date"
                          className="form-control"
                          onChange={(e)=> setForm({...form, birth_date:e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-lg-9 my-1 ">
                        <label className="text-black" htmlFor="gender">
                          Gender
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e)=> setForm({...form, gender:e.target.value})}
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          
                        </select>
                      </div>
                    </div>
                    {/* <div className="form-row">
                      <div className="col-lg-9 my-1 ">
                        <label className="text-black" htmlFor="type">
                          Role
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(e)=> setForm({...form, type:e.target.value})}
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        
                        </select>
                      </div>
                    </div> */}
                    {/* <div className="form-row">
                      <img className="uplod-img"  alt="" />
                      <div className="col-lg-9 my-1 ">
                        <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">
                            Image
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            onChange={(e)=> setForm({...form, avatar:e.target.value})}
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="form-row">
                      <div className="col-lg-9">
                        <button onClick={e=>submitHandler(e)}
                        type="submit" className="btn2  my-2">
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