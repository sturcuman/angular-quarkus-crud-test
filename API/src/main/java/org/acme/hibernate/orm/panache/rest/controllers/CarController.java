package org.acme.hibernate.orm.panache.rest.controllers;

import org.acme.hibernate.orm.panache.rest.exceptions.RestApplicationException;
import org.acme.hibernate.orm.panache.rest.models.Car;
import org.acme.hibernate.orm.panache.rest.services.CarService;
import org.jboss.resteasy.reactive.ResponseStatus;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.List;


@Path("/api/cars")
public class CarController {

    @Inject
    CarService carService;


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @PermitAll
    public List<Car> getAll() {
        return carService.getAll();
    }


    @POST
    @PermitAll
    @ResponseStatus(201)
    @Transactional
    public void create(Car car) {
        carService.create(car);
    }


    @GET
    @PermitAll
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Car getById(Long id) throws RestApplicationException {
        return carService.getById(id);
    }


    @PATCH
    @PermitAll
    @Path("/{id}")
    @Transactional
    public void updateById(Long id, Car car) throws RestApplicationException {
        carService.updateById(car, id);
    }


    @DELETE
    @PermitAll
    @Path("/{id}")
    @Transactional
    public void deleteById(Long id) throws RestApplicationException {
        carService.deleteById(id);
    }
}
