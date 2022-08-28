import logo from './logo.svg';
import React from 'react'
import './App.css';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
//mport 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";
import { Button } from 'reactstrap';
function App(){

  const btnHandle=()=>{
    toast("this is my first message");
  };


  return (
    <div>
      <ToastContainer/>
      <h1>Here is a heading</h1>
      <Button color="warning" outline onClick={btnHandle}>
         Click Me
      </Button>
    </div>
  )
}

export default App;
