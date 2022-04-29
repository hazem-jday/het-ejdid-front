import {useState,useEffect} from 'react';
import NavBar from './Header/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PageHeader from './Header/PageHeader';
import Home from './Home/Home';
import Footer from"./Footer/Footer"
import axios from "axios"
import Login from "./Account/Login"
import Signup from "./Account/Signup"
import Logout from "./Account/Logout"
import Article from './Article/Article'
import Search from './Search/Search';
import International from './NewsCategories/International'
import National from './NewsCategories/National'

import Sport from './NewsCategories/Sport'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


axios.defaults.baseURL = "http://127.0.0.1:8081"

export default function App() {

  const [dark,setDark]=useState(localStorage.getItem("DARK"))

  useEffect(() => {
    
  }, [dark]);
  const [userID,setUserID] = useState(localStorage.getItem("ID"))
  if(localStorage.getItem("DARK")==="true"){
    document.documentElement.style = 'filter: invert(1) hue-rotate(180deg);';
    console.log(document.documentElement.style)
    

  }
  else{
    document.documentElement.style = '';
  }


  return (
    <Router>
      <div className='mainhetjdid row col-lg-12 justify-content-center align-self-start' dir="rtl" >
        <NavBar setUserID={setUserID} userID={userID} setDark={setDark} dark={dark}/>
        <PageHeader/>
        <Routes>
          <Route exact path="/" element={<Home setUserID={setUserID} userID={userID} />} />
          <Route path="/Login" element={<Login setUserID={setUserID} userID={userID} />} />
          <Route path="/Signup" element={<Signup setUserID={setUserID} userID={userID}/>} />
          <Route path="/Logout" element={<Logout setUserID={setUserID} userID={userID}/>} />
          <Route path="/Article/:id" element={<Article setUserID={setUserID} userID={userID}/>} />
          <Route path="/Search/:s" element={<Search setUserID={setUserID} userID={userID}/>} />
          <Route path="/Inter/:n" element={<International setUserID={setUserID} userID={userID}/>} />
          <Route path="/Inter" element={<International setUserID={setUserID} userID={userID}/>} />
          <Route path="/Nat/:n" element={<National setUserID={setUserID} userID={userID}/>} />
          <Route path="/Nat" element={<National setUserID={setUserID} userID={userID}/>} />
          <Route path="/Sport/:n" element={<Sport setUserID={setUserID} userID={userID}/>} />
          <Route path="/Sport" element={<Sport setUserID={setUserID} userID={userID}/>} />
        </Routes>
        <Footer setUserID={setUserID} userID={userID}/>
      </div>
    </Router>
  );
}