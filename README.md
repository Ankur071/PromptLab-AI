# 🧪 PromptLab AI

<div align="center">

![PromptLab AI](PromptLab%20UI/public/promptlab-logo.png)

**Compare responses from multiple LLM models side-by-side in real-time**

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.8-6DB33F?style=for-the-badge&logo=spring-boot)](https://spring.io/projects/spring-boot)
[![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=for-the-badge&logo=angular)](https://angular.io/)
[![Spring AI](https://img.shields.io/badge/Spring%20AI-1.1.2-6DB33F?style=for-the-badge&logo=spring)](https://spring.io/projects/spring-ai)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [API Endpoints](#-api-endpoints) • [Screenshots](#-screenshots)

</div>

---

## ✨ Features

- 🔄 **Real-time Comparison** - Send one prompt to multiple LLMs and compare responses instantly
- 🏆 **Response Racing** - See which model responds fastest with visual ranking
- 🌙 **Dark/Light Theme** - Beautiful UI with theme toggle support
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Parallel Processing** - All models process simultaneously for fair comparison

## 🤖 Supported Models

| Model | Provider | Description |
|-------|----------|-------------|
| **GPT-5.1** | OpenAI | Latest GPT model with advanced reasoning |
| **Gemini Pro** | Google | Google's multimodal AI model |
| **DeepSeek Chat** | DeepSeek | Powerful open-source LLM |

## 🛠 Tech Stack

### Backend
- **Framework:** Spring Boot 3.5.8
- **AI Integration:** Spring AI 1.1.2
- **Language:** Java 17
- **Build Tool:** Maven

### Frontend
- **Framework:** Angular 20
- **UI Components:** PrimeNG
- **Styling:** Custom CSS with CSS Variables
- **State Management:** Angular Signals

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Node.js 18 or higher
- npm 9 or higher
- API keys for OpenAI, Google Gemini, and DeepSeek

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd "PromptLab backend"
   ```

2. Configure your API keys in `src/main/resources/application.properties`:
   ```properties
   spring.ai.openai.api-key=YOUR_OPENAI_API_KEY
   spring.ai.openai.chat.options.model=gpt-4o

   spring.ai.google.genai.api-key=YOUR_GOOGLE_API_KEY
   spring.ai.google.genai.chat.options.model=gemini-pro

   spring.ai.deepseek.api-key=YOUR_DEEPSEEK_API_KEY
   spring.ai.deepseek.chat.options.model=deepseek-chat
   ```

3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   
   The backend will start at `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd "PromptLab UI"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   
   The frontend will be available at `http://localhost:4200`

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/openai/{message}` | GET | Get response from OpenAI GPT |
| `/api/gemini/{message}` | GET | Get response from Google Gemini |
| `/api/deepseek/{message}` | GET | Get response from DeepSeek |

### Example Request

```bash
curl http://localhost:8080/api/openai/What%20is%20artificial%20intelligence
```

## 📸 Screenshots

### Dark Mode
*Modern dark theme with glassmorphism design*

### Light Mode  
*Clean light theme for daytime usage*

### Response Comparison
*Side-by-side comparison with response order tracking*

## 📁 Project Structure

```
PromptLab AI/
├── PromptLab backend/              # Spring Boot Backend
│   ├── src/main/java/
│   │   └── com/telusko/SpringAIDemo/
│   │       ├── SpringAiDemoApplication.java
│   │       ├── OpenAIController.java
│   │       ├── GeminiController.java
│   │       └── DeepSeekController.java
│   └── src/main/resources/
│       └── application.properties
│
└── PromptLab UI/                   # Angular Frontend
    ├── src/app/
    │   ├── app.ts
    │   ├── app.html
    │   ├── app.css
    │   ├── services/
    │   │   ├── llm.service.ts
    │   │   └── theme.service.ts
    │   └── models/
    │       └── model.interface.ts
    └── public/
        └── [assets]
```

## 🔧 Configuration

### CORS Configuration
All backend controllers are configured with `@CrossOrigin("*")` to allow requests from the frontend.

### Theme Configuration
The app defaults to dark mode. Users can toggle between themes, and the preference is saved to localStorage.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ankur**

- GitHub: [@Ankur071](https://github.com/Ankur071)

---

<div align="center">

Made with Spring AI and Angular

⭐ Star this repo if you find it helpful!

</div>
