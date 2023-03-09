package com.example.MappingExample.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MappingExample.Model.Department;

public interface DepartmentRepo extends JpaRepository<Department, Integer> {

}
