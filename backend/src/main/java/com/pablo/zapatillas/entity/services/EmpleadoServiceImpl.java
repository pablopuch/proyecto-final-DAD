package com.pablo.zapatillas.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pablo.zapatillas.entity.dao.IEmpleadoDao;
import com.pablo.zapatillas.entity.models.Empleado;

@Service
public class EmpleadoServiceImpl implements IEmpleadoService{

	@Autowired
	IEmpleadoDao empleadoDao;
	
	@Override
	public List<Empleado> getAll(){
		return (List<Empleado>) empleadoDao.findAll();
	}
	
}
