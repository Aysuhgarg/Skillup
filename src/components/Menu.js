import React from 'react';
import {ListGroup,ListGroupItem} from "reactstrap"

const Menu =()=>{

    return (
        <ListGroup>
            <ListGroupItem tag="a" href= "#!" action>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href= "#!" action>
                AddCourse
            </ListGroupItem>
            <ListGroupItem tag="a" href= "#!" action>
                ViewCourses
            </ListGroupItem>
            <ListGroupItem tag="a" href= "#!" action>
                About
            </ListGroupItem>
            <ListGroupItem tag="a" href= "#!" action>
                Contact
            </ListGroupItem>
        </ListGroup>
    );

};

export default Menu;