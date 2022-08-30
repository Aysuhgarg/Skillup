package com.ayush.skill.up.repository;

import com.ayush.skill.up.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Integer> {
}
