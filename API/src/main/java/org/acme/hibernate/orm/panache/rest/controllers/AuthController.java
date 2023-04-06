package org.acme.hibernate.orm.panache.rest.controllers;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import org.acme.hibernate.orm.panache.rest.dto.UserDto;
import org.acme.hibernate.orm.panache.rest.exceptions.RestApplicationException;
import org.acme.hibernate.orm.panache.rest.models.User;
import org.acme.hibernate.orm.panache.rest.services.TokenService;
import org.acme.hibernate.orm.panache.rest.services.UserService;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.*;

import org.jboss.resteasy.reactive.RestForm;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;

@Path("/api/auth")
public class AuthController {

    @Inject
    UserService userService;
    @Inject
    TokenService tokenService;



    @POST
    @PermitAll
    @Path("/register")
    public UserDto register(User user) throws RestApplicationException {
        User createdUser = userService.create(user);

        String token = tokenService.generateToken(user.login);
        createdUser.token = token;

        return new UserDto(createdUser);
    }


    @POST
    @PermitAll
    @Path("/login")
    public UserDto login(User user) throws RestApplicationException {
        User loginedUser = userService.login(user.login, user.password);

        String token = tokenService.generateToken(user.login);
        loginedUser.token = token;

        return new UserDto(loginedUser);
    }

}
