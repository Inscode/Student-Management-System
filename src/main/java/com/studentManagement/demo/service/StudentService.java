package com.studentManagement.demo.service;

import com.studentManagement.demo.model.Student;

import java.util.List;

public interface StudentService {
    Student  addStudent(Student student);

    List<Student> getStudents();

    Student updateStudent(Student student, Long id);

    Student getStudentById(Long id);

    void deleteStudent(Long id);


}
