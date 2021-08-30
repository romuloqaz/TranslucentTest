package com.translucent.gamecatalog.model;

import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
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

    @NotNull(message = "error.validation.title.not.null")
    @Size(max = 100, message = "error.validation.title.sizeTitle")
    private String title;

    @NotNull(message = "error.validation.year.not.null")
    private String year;

    @NotNull(message = "error.validation.console.not.null")
    private String console;

    @NotNull(message = "error.validation.completed.not.null")
    private Boolean completed;

    private LocalDate dateOfCompletion;

    @NotNull(message = "error.validation.personalNotes.not.null")
    private String personalNotes;

}
