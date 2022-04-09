import * as React from 'react';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PageHeader from './PageHeader';
import Main from './Maintest';
import Footer from"./Footer"
export default function App() {
  return (
    <div className='mainhetjdid row col-lg-12 justify-content-center align-self-start' dir="rtl" >
      <NavBar/>
      <PageHeader/>
      <Main/>
      <Footer/>
    </div>
  );
}