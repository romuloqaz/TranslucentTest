package com.translucent.gamecatalog.exception;

public class GameNotCompletedException extends RuntimeException  {

    public static final String EXCEPTION_CODE = "This game is not completed";

    public GameNotCompletedException() {
        super(EXCEPTION_CODE);
    }
}
