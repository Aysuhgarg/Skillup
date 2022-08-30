package com.ayush.skill.up.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Course {

    @Id
    int id;
    String name;
    String title;
    //String description;

}
