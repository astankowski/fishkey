package io.github.astankowski.fishkey.user;

import java.util.List;
import java.util.UUID;

public interface UserService {

    public List<User> getAllUsers();

    public List<User> findAllUsers();

    public User getUserById(final UUID id);

    public User findUserProfileByJwt(String jwt);

    public User findUserByEmail(String email);

    public User findUserByUsername(String username);

    public User findUserById(UUID id);

    public User createUser(User user);

    public User updateUser(User user);

    public void deleteUserById(final UUID id);

    public List<User> findAllByOrderByTotalPointsDesc();
}
