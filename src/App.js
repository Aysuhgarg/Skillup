import logo from './logo.svg';
import React from 'react'
import './App.css';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
//mport 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";
import { Button } from 'reactstrap';
import Course from './components/Course';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import Addcourses from './components/Addcourses';
function App(){

  const btnHandle=()=>{
    toast.success("done");
  };


  return (
    <div>
      <ToastContainer/>
      <Home/>
      <Allcourses/>
      <Addcourses />
    </div>
  )
}

export default App;
