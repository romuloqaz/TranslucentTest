package com.translucent.gamecatalog.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@ControllerAdvice
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {


    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<Object> handleValidationException(ValidationException ex, WebRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        List<String> errors = ex.getErrors().stream()
                .map(ObjectError::getDefaultMessage).collect(Collectors.toList());
        Error error = createProblemBuilder(ValidationException.EXCEPTION_CODE, errors).build();
        return handleExceptionInternal(ex, error, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(InvalidDateException.class)
    public ResponseEntity<Object> handleInvalidDateException(InvalidDateException ex, WebRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        Error error = createProblemBuilder(InvalidDateException.EXCEPTION_CODE, Collections.emptyList()).build();
        return handleExceptionInternal(ex, error, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(GameNotCompletedException.class)
    public ResponseEntity<Object> handleGameNoteCompletedException(GameNotCompletedException ex, WebRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        Error error = createProblemBuilder(GameNotCompletedException.EXCEPTION_CODE, Collections.emptyList()).build();
        return handleExceptionInternal(ex, error, new HttpHeaders(), status, request);
    }

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers, HttpStatus status, WebRequest request) {
        if (body == null) {
            body = Error.builder()
                    .error(status.getReasonPhrase())
                    .errors(Collections.emptyList())
                    .build();
        } else if (body instanceof String) {
            body = Error.builder()
                    .error((String) body)
                    .errors(Collections.emptyList())
                    .build();
        }
        return super.handleExceptionInternal(ex, body, headers, status, request);
    }

    private Error.ErrorBuilder createProblemBuilder(String error, List<String> errors) {
        return Error.builder()
                .timestamp(LocalDateTime.now())
                .error(error)
                .errors(errors);
    }

}
