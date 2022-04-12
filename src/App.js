import {useState} from 'react';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PageHeader from './Header/PageHeader';
import Main from './Main';
import Footer from"./Footer/Footer"
import axios from "axios"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import Logout from "./Logout/Logout"


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




axios.defaults.baseURL = "http://127.0.0.1:8081"

export default function App() {

  const [userID,setUserID] = useState(localStorage.getItem("ID"))

  return (
    <Router>
      <div className='mainhetjdid row col-lg-12 justify-content-center align-self-start' dir="rtl" >
        <NavBar setUserID={setUserID} userID={userID}/>
        <PageHeader/>
        <Routes>
          <Route exact path="/" element={<Main setUserID={setUserID} userID={userID} />} />
          <Route path="/Login" element={<Login setUserID={setUserID} userID={userID} />} />
          <Route path="/Signup" element={<Signup setUserID={setUserID} userID={userID}/>} />
          <Route path="/Logout" element={<Logout setUserID={setUserID} userID={userID}/>} />
        </Routes>
        <Footer setUserID={setUserID} userID={userID}/>
      </div>
    </Router>
  );
}