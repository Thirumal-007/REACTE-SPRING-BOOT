package com.example.MappingExample.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MappingExample.Model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}
