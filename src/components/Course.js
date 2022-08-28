import React from 'react';
import {Card,CardBody,CardSubtitle,CardTitle,CardText,Button,CardFooter,Container} from "reactstrap";
//import Card from 'react-bootstrap/Card'

const Course=({course})=>{

    return (
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle className='font-weight-bold' ><h5>{course.title}</h5></CardSubtitle>
                <CardText>It a {course.name} course for beginers</CardText>
                <Container className='text-center'>
                    <Button color= "danger" >Delete</Button>
                    <Button color='warning'>Update</Button>
                </Container>

            </CardBody>
        </Card>
    );
};

export default Course;