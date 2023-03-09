package com.example.MappingExample.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.MappingExample.Model.Department;
import com.example.MappingExample.Model.Employee;
import com.example.MappingExample.Repo.DepartmentRepo;
import com.example.MappingExample.Repo.EmployeeRepo;
import com.example.MappingExample.Service.EmployeeRequest;

@RestController
public class EmployeeController {
	@Autowired
	DepartmentRepo dRepository;
	@Autowired
	EmployeeRepo eRepository;

	@PostMapping("/addemployee")
	public Employee saveEmployee(@Validated @RequestBody EmployeeRequest eRequest) {
		Department department = new Department();
		department.setName(eRequest.getDepartment());
		department = dRepository.save(department);
		
		Employee employee = new Employee(eRequest);
		employee.setDepartment(department);
		eRepository.save(employee);
		return employee;
	}
	@GetMapping("/showemployee")
	public List<Employee> getEmployees(){
		return eRepository.findAll();
	}

}