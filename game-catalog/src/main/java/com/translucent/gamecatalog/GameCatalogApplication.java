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
		Game game = new Game( null,"FIFA 22", "2011", "video game", true, LocalDate.now(), "great");
		Game game1 = new Game(null, "the last of us", "20121", "video game1", true, LocalDate.now(), "great 1");
		gameRepository.saveAll(Arrays.asList(game, game1));
	}
}
