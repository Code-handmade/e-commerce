import React,{ useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'
import {
  MainPage, Login, Register
} from './pages'

function App() {

  const[login, setLogin] = useState(false)

  const userLogin = (param) =>{
    setLogin(param)
  }
  const getToken = (token) => {
    localStorage.setItem("access_token", token)
  }

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }, [login])
  

  return (
    <BrowserRouter>
    {
      login ?
    
      <MainPage login={login} userLogin={userLogin} />
     :
    <Route path="/login">
      <Login login={login} userLogin={userLogin} getToken={getToken}/>
      </Route>
    }
    <Route path="/register">
      <Register/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
