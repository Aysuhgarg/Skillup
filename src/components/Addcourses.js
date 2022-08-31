//import { Button } from 'bootstrap';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import {Form, FormGroup,Input,Container,Button } from 'reactstrap'
import base_url from '../api/service';
import { toast } from 'react-toastify';

const Addcourses=()=>{

    useEffect(()=>{
        document.title = "Add Courses";
    },[]);

    const [course,setCourses]=useState({});
    
    // const postcourse()=>{
    //     axios.post()
    // }

    //handler function to add new course in backend
    const handleForm=(e)=>{
        console.log(course);
        console.log(e);
        postCourserToapi(course);
        e.preventDefault();
    }

    //post new course to backend api
    const postCourserToapi=(data)=>{
        axios.post(`${base_url}api/courses/post`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Course added");
                console.log(response.data);
            },
            (error)=>{
                
                console.log(error);
                toast.error("Server down");
            }
        )
    }


    return(
        <Fragment>
            <h1 className='text-center my-3'>Fill course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor='userId'>CourseId</label>
                    <Input type= "text" placeholder='Enter here' name="userId" id="userId" onChange={(e) =>{
                        setCourses({...course,id: e.target.value});
                    }} />
                </FormGroup>

                <FormGroup>
                <label htmlFor='title'>Course Title</label>
                <Input type= "text" placeholder='Enter title here' id="title" onChange={(e)=>{
                    setCourses({...course,name: e.target.value});
                }}/>
                </FormGroup>

                <FormGroup>
                <label htmlFor='description'>Course Description</label>
                <Input type= "textarea" placeholder='Enter title here' id="description" style={{height:150}} onChange={(e)=>{
                    setCourses({...course,title: e.target.value});
                }} />
                </FormGroup>

                <Container className='text-center' >
                    <Button type="submit" color="success "> Add Course</Button>
                    <Button type="reset" color="warning ml-2"> clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default Addcourses;