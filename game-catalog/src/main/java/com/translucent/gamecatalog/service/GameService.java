package com.translucent.gamecatalog.service;

import com.translucent.gamecatalog.exception.GameNotCompletedException;
import com.translucent.gamecatalog.exception.InvalidDateException;
import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
public class GameService {

    @Autowired
    public GameRepository gameRepository;

    public List<Game> findAllOrderByDate() {
        return gameRepository.findAllByOrderByDateOfCompletionDesc();
    }

    @Transactional
    public Game insert (Game game){
        game.setId(null);
        validationGame(game);
        return gameRepository.save(game);
    }

    private void validationGame(Game game) {
        if (game.getDateOfCompletion() != null && game.getDateOfCompletion().isAfter(LocalDate.now())) {
            throw new InvalidDateException();
        } else if (game.getCompleted() && game.getDateOfCompletion() == null) {
            throw new InvalidDateException();
        } else if (!game.getCompleted() && game.getDateOfCompletion() != null) {
            throw new GameNotCompletedException();
        }
    }

}
