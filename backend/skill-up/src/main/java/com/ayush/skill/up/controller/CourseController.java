package com.ayush.skill.up.controller;

import com.ayush.skill.up.model.Course;
import com.ayush.skill.up.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    CourseService cs;
    @GetMapping("/courses/")
    public ResponseEntity<List<Course>> getAllCourse(){

        return new ResponseEntity<List<Course>>(cs.getAllcourse(),HttpStatus.OK);
    }

    @PostMapping("/courses/post")
    public ResponseEntity<Course> addCourse(@RequestBody Course coursedata){

        return new ResponseEntity<Course>(cs.addCourse(coursedata),HttpStatus.CREATED);
    }

    @DeleteMapping("course/{id}")
    public ResponseEntity<?> deleteById(@PathVariable int id){
        cs.deleteCourseById(id);
        return new ResponseEntity(Map.of("message","Course deleted successfully"),HttpStatus.OK);
    }

    @PutMapping("/course")
    public ResponseEntity<Course> updateCourseById(@RequestBody Course newCourse){
        return new ResponseEntity<Course>(cs.updateCourseById(newCourse),HttpStatus.OK);
    }
}
