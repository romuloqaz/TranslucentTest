package com.translucent.gamecatalog.controller;

import com.translucent.gamecatalog.exception.ValidationException;
import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import java.util.List;

@RestController
@RequestMapping(value="/games")
public class GameController {

    @Autowired
    private GameService gameService;

    @RequestMapping(method= RequestMethod.GET)
    public ResponseEntity<List<Game>>findAllGamesByDate() {
        List<Game> list = gameService.findAllOrderByDate();
        return ResponseEntity.ok().headers(getHttpHeaders()).body(list);
    }

    @RequestMapping(method=RequestMethod.POST)
    public ResponseEntity<Game> insert(@Valid @RequestBody Game obj, Errors errors) {
        if (errors.hasErrors()) {
            throw new ValidationException(errors.getAllErrors());
        }
        Game response = gameService.insert(obj);
        return ResponseEntity.status(HttpStatus.CREATED).headers(getHttpHeaders()).body(response);
    }

    @NotNull
    private HttpHeaders getHttpHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");
        headers.add("Access-Control-Allow-Methods", "GET,POST");
        headers.add("Access-Control-Allow-Headers", "Content-Type");
        return headers;
    }

}
