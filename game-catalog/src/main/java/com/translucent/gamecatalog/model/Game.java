package com.translucent.gamecatalog.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 100, message = "error.validation.title.sizeTitle")
    @NotEmpty(message = "error.validation.title.not.empty")
    private String title;

    @NotNull(message = "error.validation.year.not.null")
    @Min(value = 1970, message = "error.validation.year.min.value")
    private Integer year;

    @NotEmpty(message = "error.validation.console.not.empty")
    private String console;

    @NotNull(message = "error.validation.completed.not.null")
    private Boolean completed;

    private LocalDate dateOfCompletion;

    @NotEmpty(message = "error.validation.personalNotes.not.empty")
    private String personalNotes;

}
