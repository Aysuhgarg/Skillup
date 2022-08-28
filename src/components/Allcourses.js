import React, { useState } from 'react'
import Course from './Course';

const Allcourses=()=>{

    const [courses,setCourses]=useState([
        {title:"Web Development",name:"HTML, CSS"},
        {title:"Android Development",name:"kotline,xml"},
        {title:"Backend Development",name:"Spring Boot"},
        {title:"Frontend",name:"Angular "}
    ])


    return (
        <div>
             <h1>All Courses</h1>
             <p>List of courses are as follows</p>
             {
                courses.length > 0 ? courses.map((item)=> <Course course={item}/>): "No courses available" 
             }
        </div>
    );
};

export default Allcourses;