package com.translucent.gamecatalog.service;

import com.translucent.gamecatalog.exception.GameNotCompletedException;
import com.translucent.gamecatalog.exception.InvalidDateException;
import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class GameService {

    @Autowired
    public GameRepository gameRepository;

    public List<Game> findAllOrderByDate() {
        return gameRepository.findAllByOrderByYearAsc();
    }

    @Transactional
    public Game insert (Game game){
        game.setId(null);
        validationGame(game);
        return gameRepository.save(game);
    }

    private void validationGame(Game game) {
        Date date = new Date();
        SimpleDateFormat getYearFormat = new SimpleDateFormat("yyyy");
        Integer currentYear = Integer.valueOf(getYearFormat.format(date));
        if (game.getDateOfCompletion() != null && game.getDateOfCompletion().isAfter(LocalDate.now()) || game.getYear() > currentYear) {
            throw new InvalidDateException();
        } else if (!game.getCompleted() && game.getDateOfCompletion() != null || game.getCompleted() && game.getDateOfCompletion() == null) {
            throw new GameNotCompletedException();
        }
    }

}
