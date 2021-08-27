package com.translucent.gamecatalog.exception;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
public class Error {
    private LocalDateTime timestamp;
    private String error;
    private List<String> errors;

}
