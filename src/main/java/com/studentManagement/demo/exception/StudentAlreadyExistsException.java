package com.studentManagement.demo.exception;

public class StudentAlreadyExistsException extends RuntimeException {
    public StudentAlreadyExistsException(String s) {
        super(s);
    }
}
