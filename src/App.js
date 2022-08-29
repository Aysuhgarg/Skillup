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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App(){

  const btnHandle=()=>{
    toast.success("done");
  };


  return (
    <div>
      <Router>
      <ToastContainer/>
      <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menu/>
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact></Route>
              <Route path="/add-course" component={Addcourses} exact></Route>
              <Route path="/view-courses" component={Allcourses} exact></Route>
            </Col>
          </Row>
      </Container>
      </Router>
    </div>
  );
};

export default App;
