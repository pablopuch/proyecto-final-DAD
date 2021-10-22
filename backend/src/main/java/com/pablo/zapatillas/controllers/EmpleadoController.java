package com.pablo.zapatillas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pablo.zapatillas.entity.services.IEmpleadoService;
import com.pablo.zapatillas.entity.models.Empleado;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmpleadoController {

	@Autowired
	IEmpleadoService empleadoService;
	
	@GetMapping("/empleados")
	public List<Empleado> getAll(){
		return empleadoService.getAll();
	}
	
}
