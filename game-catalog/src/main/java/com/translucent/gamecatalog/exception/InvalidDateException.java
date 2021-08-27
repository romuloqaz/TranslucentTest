package com.translucent.gamecatalog.exception;

public class InvalidDateException extends RuntimeException  {

    public static final String EXCEPTION_CODE = "Invalid Date";

    public InvalidDateException() {
        super(EXCEPTION_CODE);
    }
}

