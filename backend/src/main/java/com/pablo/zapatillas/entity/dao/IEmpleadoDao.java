package com.pablo.zapatillas.entity.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import com.pablo.zapatillas.entity.models.Empleado;

public interface IEmpleadoDao extends CrudRepository<Empleado, Long>{

}
