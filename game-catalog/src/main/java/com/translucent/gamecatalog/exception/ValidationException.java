package com.translucent.gamecatalog.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.validation.ObjectError;

import java.util.List;

@Getter
@AllArgsConstructor
public class ValidationException extends RuntimeException {
    public static final String EXCEPTION_CODE = "error.validation";

    private final List<ObjectError> errors;
}
