import React from 'react';
import {Card,CardBody,CardSubtitle,CardTitle,CardText,Button,CardFooter,Container, Row,Col} from "reactstrap";
//import Card from 'react-bootstrap/Card'

const Course=({course})=>{

    return (
        <Card className='text-center'>
            <Container>
                {/* <Row >
                    <Col md={2}  className=''>
                        <CardBody className='text-center mt-4'><h1>{course.id}</h1></CardBody>
                    </Col>
                    <Col md={10} className='bg-warning'> */}
                <CardBody>
                    <CardSubtitle className='font-weight-bold' ><h5>{course.name}</h5></CardSubtitle>
                    <CardText>{course.title}</CardText>
                    <Container className='text-center'>
                        <Button color= "danger">Delete</Button>
                        <Button color="primary ml-3">Update</Button>
                    </Container>
                </CardBody>
                {/* </Col>
                </Row> */}
           </Container>
        </Card>
    );
};

export default Course;