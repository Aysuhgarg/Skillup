import React from 'react';
import {ListGroup,ListGroupItem} from "reactstrap"

const Menu =()=>{

    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to= "/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to= "/add-course" action>
               AddCourse
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to= "view-course" action>
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