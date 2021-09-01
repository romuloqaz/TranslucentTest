package com.translucent.gamecatalog.controller;

import com.translucent.gamecatalog.exception.ValidationException;
import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.service.GameService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;

@RestController
@RequestMapping(value="/games")
@CrossOrigin(origins = "http://localhost:3000")
public class GameController {

    @Autowired
    private GameService gameService;

    @ApiOperation("Get list of the games")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Returns a list of games with the status OK"),
    })
    @RequestMapping(method= RequestMethod.GET)
    public ResponseEntity<List<Game>>findAllGamesByDate() {
        List<Game> list = gameService.findAllOrderByDate();
        return ResponseEntity.ok().body(list);
    }

    @ApiOperation("Creating a new game")
    @ApiResponses({
            @ApiResponse(code = 201, message = "Return an empty list with the status Created"),
            @ApiResponse(code = 400, message = "Invalid request attributes"),
    })
    @RequestMapping(method=RequestMethod.POST)
    public ResponseEntity<Game> insert(@Valid @RequestBody Game obj, Errors errors) {
        if (errors.hasErrors()) {
            throw new ValidationException(errors.getAllErrors());
        }
        Game response = gameService.insert(obj);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
