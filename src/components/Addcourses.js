//import { Button } from 'bootstrap';
import React, { Fragment, useEffect } from 'react';
import {Form, FormGroup,Input,Container,Button } from 'reactstrap'

const Addcourses=()=>{

    useEffect(()=>{
        document.title = "Add Courses"
    },[]);

    return(
        <Fragment>
            <h1 className='text-center my-3'>Fill course Details</h1>
            <Form>
                <FormGroup>
                    <label for='userId'>CourseId</label>
                    <Input type= "text" placeholder='Enter here' name="userId" id="userId" />
                </FormGroup>

                <FormGroup>
                <label for='title'>Course Title</label>
                <Input type= "text" placeholder='Enter title here' id="title" />
                </FormGroup>

                <FormGroup>
                <label for='description'>Course Description</label>
                <Input type= "textarea" placeholder='Enter title here' id="description" style={{height:150}} />
                </FormGroup>

                <Container className='text-center' >
                    <Button color="success "> Add Course</Button>
                    <Button color="warning ml-2"> clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default Addcourses;