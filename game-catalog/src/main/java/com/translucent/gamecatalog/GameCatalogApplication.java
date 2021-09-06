package com.translucent.gamecatalog;

import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDate;
import java.util.Arrays;

@SpringBootApplication
public class GameCatalogApplication implements CommandLineRunner {

	@Autowired
	private GameRepository gameRepository;

	public static void main(String[] args) {
		SpringApplication.run(GameCatalogApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Game game = new Game( null,"Metal Gear Solid 2", 2001, "PS2", true, LocalDate.of(2017, 8 ,7), " I really liked this game. A masterpiece from Kojima productions.");
		Game game1 = new Game(null, "Mario Kart 8", 2014, "NINTENDO SWITCH", false, null, "Excellent racing game");
		gameRepository.saveAll(Arrays.asList(game, game1));
	}
}
