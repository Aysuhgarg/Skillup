package com.ayush.skill.up.controller;

import com.ayush.skill.up.Model.Course;
import com.ayush.skill.up.service.courseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    courseService cs;
    @GetMapping("/courses/")
    public ResponseEntity<List<Course>> getAllCourse(){

        return new ResponseEntity<List<Course>>(cs.getAllcourse(),HttpStatus.OK);
    }

    @PostMapping("/courses/post")
    public ResponseEntity<Course> addCourse(@RequestBody Course coursedata){

        return new ResponseEntity<Course>(cs.addCourse(coursedata),HttpStatus.CREATED);
    }

}
