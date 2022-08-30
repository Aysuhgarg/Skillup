package com.ayush.skill.up.service;

import com.ayush.skill.up.Model.Course;
import com.ayush.skill.up.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class courseService {

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
}
