import logo from './logo.svg';
import React from 'react'
import './App.css';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
//mport 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";
import { Button } from 'reactstrap';
import Course from './components/Course';
function App(){

  const btnHandle=()=>{
    toast.success("done");
  };


  return (
    <div>
      <ToastContainer/>
      <h1>Here is a heading</h1>
      <Button color="warning" outline onClick={btnHandle}>
         clickMe
      </Button>

      <Course course={{title:"Web Development",name:"HTML, CSS"}}/>
    </div>
  )
}

export default App;
