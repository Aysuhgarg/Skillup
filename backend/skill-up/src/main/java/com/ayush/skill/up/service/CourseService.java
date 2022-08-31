package com.ayush.skill.up.service;

import com.ayush.skill.up.exception.ResourseNotFoundException;
import com.ayush.skill.up.model.Course;
import com.ayush.skill.up.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    CourseRepo cr;

    public List<Course> getAllcourse(){

        List<Course> allcourse=cr.findAll();
        return allcourse;
    }

    public Course addCourse(Course CourseObject) {
        Course newcourse = new Course();
        newcourse.setId(CourseObject.getId());
        newcourse.setName(CourseObject.getName());
        newcourse.setTitle(CourseObject.getTitle());
        Course savesCourse = cr.save(newcourse);
        return savesCourse;
    }

    public void deleteCourseById(int id){
        Course course=cr.findById(id).orElseThrow(()->new ResourseNotFoundException("Course","id",id));;
        cr.delete(course);
    }

    public Course updateCourseById(Course newCourse){
//        int id= newCourse.getId();
//        Course oldCourse= cr.findById(id).orElseThrow(()->new ResourseNotFoundException("Course","id",id));
//
//        oldCourse.setName(newCourse.getName());
//        oldCourse.setTitle(newCourse.getTitle());

        return cr.save(newCourse);
    }
}
