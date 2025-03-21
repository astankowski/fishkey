package io.github.astankowski.fishkey;

import io.github.astankowski.fishkey.user.User;
import io.github.astankowski.fishkey.user.UserRepository;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@AutoConfigureMockMvc
class UserTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    UserRepository userRepository;

    @Test
    @DisplayName("User can be created")
    void testCreateUser() {
        User testUser = new User();
        testUser.setUsername("testUsername");
        testUser.setEmail("testEmail@example.com");

        User createdUser = userRepository.save(testUser);
        assertNotNull(createdUser);
        assertEquals("testUsername", createdUser.getUsername());
    }
}