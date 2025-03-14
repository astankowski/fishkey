## Fishkey

Fishkey is a web application for learning through flashcards, enhanced with AI. The main AI features include:
- A chatbot for interactive learning
- AI-generated flashcard content to help users create definitions automatically

## Demo
https://github.com/user-attachments/assets/e152a340-4f60-4122-89a0-c4b7a58c6220

https://github.com/user-attachments/assets/807f085e-be56-4d90-8805-21e7a92bc772

## Todo

- [ ] Better error handling
- [ ] Implement pagination for the leaderboard, trophies and public sets
- [ ] Rewrite AI chatbot from python to spring-ai-ollama-spring-boot-starter
- [ ] Allow users to generate definitions using AI
- [ ] Generate trophies with AI instead of using emojis
- [ ] Create a landing page
- [ ] Write better api documentation
- [ ] Use Certbot for https

### In Progress

- [ ] Implement user auth with JWT
- [ ] Integration tests 
- [ ] Migrate to Tailwind v4
- [ ] Create axios client to handle all frontend requests
- [ ] Axios interceptor

## Tech Stack
### Backend
- **Java**
- **Spring Boot**
- **PostgreSQL**

### Frontend
- **React**
- **Vite**
- **Tailwind CSS**
- **Shadcn/ui**

### AI Features
- **Python API** (Handles chatbot functionality)
- **Ollama**
- **llama3.1 8B**

## Setup
Follow these steps to set up and run Fishkey on your local machine.

### 1️⃣ Clone the Repository
```bash
  git clone https://github.com/your-username/fishkey.git
  cd fishkey
```

### 2️⃣ Backend Server (Spring Boot)
```bash
  ./mvnw spring-boot:run
```
This starts the backend server.

### 3️⃣ Frontend Client (React)
Ensure you have **Node.js** installed, then run:
```bash
  cd frontend
  npm install
  npm run dev
```

### 4️⃣ AI Chatbot API
Ensure you have **Python** installed, then run:
```bash
  cd frontend
  python app.py
```

### 5️⃣ Start Ollama (AI Model Server)
```bash
  ollama serve
```
_(Ensure you have llama3.1:latest model installed before running this)_

## API Documentation
Swagger is enabled for API documentation. Once the backend is running, visit:
- [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) for interactive API docs
- [http://localhost:8080/api-docs](http://localhost:8080/api-docs) for raw API endpoints

## Features
### 📚 Leitner System (Spaced Repetition)
Fishkey plans to use the **Leitner System** for efficient flashcard learning. This technique, introduced by German journalist **Sebastian Leitner** in 1972, ensures optimal memorization by sorting flashcards into learning stages based on recall accuracy.

**How It Works:**
1. Flashcards are divided into levels based on user performance.
2. If a card is answered correctly, it moves to the next level (reviewed less frequently).
3. If answered incorrectly, it moves back to the first level (reviewed more frequently).
4. Over time, difficult cards are reviewed more often, reinforcing memory.

![Leitner System Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Leitner_system_alternative.svg/330px-Leitner_system_alternative.svg.png)

### 🤖 AI-Generated Flashcards
- Users can enter a term (front of the card), and AI generates a definition (back of the card).
- This helps accelerate the flashcard creation process.

## Contributing
Contributions are welcome! If you'd like to improve Fishkey:
1. Fork the repository.
2. Create a new branch (`feature-xyz`).
3. Make your changes.
4. Submit a pull request.

## License
This project is licensed under the **MIT License**.

---

### 🔥 Ready to Learn Smarter? Start using Fishkey today! 🚀

