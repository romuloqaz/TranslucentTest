package com.translucent.gamecatalog;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.translucent.gamecatalog.exception.GameNotCompletedException;
import com.translucent.gamecatalog.exception.InvalidDateException;
import com.translucent.gamecatalog.exception.ValidationException;
import com.translucent.gamecatalog.model.Game;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class GameCatalogApplicationTests {
	private static final String URL_GAMES = "/games";

	@Autowired
	protected MockMvc mockMvc;

	@Test
	@DisplayName("Find games")
	public void loadGames() throws Exception {
		mockMvc.perform(get(URL_GAMES)
						.contentType("application/json"))
				.andExpect(status().isOk());
	}

	@Test
	@DisplayName("Registering a game successfully")
	void postGameOK() throws Exception {
		Game request = new Game();
		request.setTitle("Metal Gear");
		request.setYear(2001);
		request.setConsole("PS2");
		request.setCompleted(false);
		request.setPersonalNotes("I really liked this game. A masterpiece from Kojima productions");
		mockMvc.perform(post(URL_GAMES)
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(request)))
				.andExpect(status().isCreated())
				.andExpect(content().contentType("application/json"));
	}


	@Test
	@DisplayName("Registering game with empty object")
	void postGameValidationException() throws Exception {
		Game request = new Game();
		mockMvc.perform(post(URL_GAMES)
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(request)))
				.andExpect(status().isBadRequest())
				.andExpect(jsonPath("$.error", is(ValidationException.EXCEPTION_CODE)))
				.andExpect(content().contentType("application/json"));
	}

	@Test
	@DisplayName("Registering a game with full status with no completion date")
	void postGameHasDateCompletionException() throws Exception {
		Game request = new Game();
		request.setTitle("Metal Gear");
		request.setYear(2021);
		request.setConsole("PS2");
		request.setCompleted(true);
		request.setPersonalNotes("I really liked this game. A masterpiece from Kojima productions");
		mockMvc.perform(post(URL_GAMES)
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(request)))
				.andExpect(jsonPath("$.error", is(GameNotCompletedException.EXCEPTION_CODE)))
				.andExpect(content().contentType("application/json"));
	}

	@Test
	@DisplayName("Registering a game with a year greater than the current one")
	void postGameYearException() throws Exception {
		Game request = new Game();
		request.setTitle("Metal Gear");
		request.setYear(2022);
		request.setConsole("PS2");
		request.setCompleted(true);
		request.setDateOfCompletion(LocalDate.now());
		request.setPersonalNotes("I really liked this game. A masterpiece from Kojima productions");
		mockMvc.perform(post(URL_GAMES)
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(request)))
				.andExpect(jsonPath("$.error", is(InvalidDateException.EXCEPTION_CODE)))
				.andExpect(content().contentType("application/json"));
	}

	@Test
	@DisplayName("Registering a game with a year smaller than the allowedo")
	void postGameYearEarlierExpect() throws Exception {
		Game request = new Game();
		request.setTitle("Metal Gear");
		request.setYear(1960);
		request.setConsole("PS2");
		request.setCompleted(true);
		request.setDateOfCompletion(LocalDate.now());
		request.setPersonalNotes("I really liked this game. A masterpiece from Kojima productions");
		mockMvc.perform(post(URL_GAMES)
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(request)))
				.andExpect(jsonPath("$.error", is(ValidationException.EXCEPTION_CODE)))
				.andExpect(content().contentType("application/json"));
	}
	@Test
	@DisplayName("Registering a game with false completed status and completion date")
	void postGameNotCompletedException() throws Exception {
		Game request = new Game();
		request.setTitle("Metal Gear");
		request.setYear(2020);
		request.setConsole("PS2");
		request.setCompleted(false);
		request.setDateOfCompletion(LocalDate.now());
		request.setPersonalNotes("I really liked this game. A masterpiece from Kojima productions");
		mockMvc.perform(post(URL_GAMES)
						.contentType(MediaType.APPLICATION_JSON)
						.content(asJsonString(request)))
				.andExpect(jsonPath("$.error", is(GameNotCompletedException.EXCEPTION_CODE)))
				.andExpect(content().contentType("application/json"));
	}

	public static String asJsonString(Object request) {
		try {
			final ObjectMapper objectMapper = new ObjectMapper();
			objectMapper.registerModule(new JavaTimeModule());
			objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
			String jsonContent = objectMapper.writeValueAsString(request);
			return jsonContent;
		} catch (Exception e) {
			throw new RuntimeException();
		}
	}
}
