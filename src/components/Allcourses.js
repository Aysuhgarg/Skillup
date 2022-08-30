import React, { useEffect, useState } from 'react'
import Course from './Course';
import base_url from '../api/service';
import axio from 'axios';
import { toast } from 'react-toastify';


const Allcourses=()=>{
    
    const [courses,setCourses]=useState([                 //Hook
    {title:"Web Development",name:"HTML, CSS"},
    {title:"Android Development",name:"kotline,xml"},
    {title:"Backend Development",name:"Spring Boot"},
    {title:"Frontend",name:"Angular "}
    ]);

    useEffect (()=>{
        document.title="All Courses"
    },[]);
    
    //call getAllCourseFromServer to hit api
    useEffect(()=>{
        getAllCourseFromServer();
    },[]);

    //function to call server
    const getAllCourseFromServer=()=>{
        axio.get(`${base_url}api/courses/`).then(
            (response)=>{
                console.log(response);
                toast.success("courses fetched");
                console.log(response.data);
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.success("Server down");
            }
            );
    };

    
    
    
    return (
        <div>
             <h1>All Courses</h1>
             <p>List of courses are as follows</p>
             {
                 courses.length > 0 ? courses.map((item)=> <Course key={item.name} course={item}/>): "No courses available" 
                }
        </div>
    );
};

export default Allcourses;

// const test=axio.create({
    //     baseURL:base_url,
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //       },
    //      // method: 'GET',
    //      //mode: 'no-cors',
    // });


    // const fetchdata = async ()=>{
        
        //     const{data,error}=await test.get('api/users/10')
        //     if(data){
            //         console.log(data);
            //     }
    //     if(error) console.log(error);
    // }