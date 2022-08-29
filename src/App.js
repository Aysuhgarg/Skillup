import logo from './logo.svg';
import React from 'react'
import './App.css';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
//mport 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";
import { Button,Container ,Row, Col} from 'reactstrap';
import Course from './components/Course';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import Addcourses from './components/Addcourses';
import Header from './components/Header';
import Menu from './components/Menu';
function App(){

  const btnHandle=()=>{
    toast.success("done");
  };


  return (
    <div>
      <ToastContainer/>
      <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menu/>
            </Col>
            <Col md={8}>
              <Home/>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default App;
