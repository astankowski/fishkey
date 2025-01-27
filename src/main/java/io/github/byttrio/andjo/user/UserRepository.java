package io.github.byttrio.andjo.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
  List<User> findAllByOrderByTotalPointsDesc();
}
