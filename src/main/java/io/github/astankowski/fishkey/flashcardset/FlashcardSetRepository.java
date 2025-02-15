package io.github.astankowski.fishkey.flashcardset;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FlashcardSetRepository extends JpaRepository<FlashcardSet, UUID> {
}
