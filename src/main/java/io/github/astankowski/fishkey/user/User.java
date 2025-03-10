package io.github.astankowski.fishkey.user;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.github.astankowski.fishkey.flashcardset.FlashcardSet;
import io.github.astankowski.fishkey.trophies.Trophies;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String username;
    private String email;
    
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String role = "ROLE_USER";
    private Integer totalPoints = 0;
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToMany
    @JoinTable(
            name = "user_saved_sets",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "set_id")
    )
    Set<FlashcardSet> savedFlashcardSets;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval=true)
    Set<Trophies> ownedTrophies;
}
