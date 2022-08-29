import React from 'react';
import { Link } from 'react-router-dom';
import {ListGroup,ListGroupItem} from "reactstrap"
import Addcourses from './Addcourses';
import Home from './Home';

const Menu =()=>{

    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to= "/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to= "/add-course" action>
               Addcourses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to= "/view-courses" action>
                ViewCourses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to= "#!" action>
                About
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to= "#!" action>
                Contact
            </Link>
        </ListGroup>
    );

};

export default Menu;