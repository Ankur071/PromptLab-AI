
package com.telusko.SpringAIDemo;

import org.springframework.ai.google.genai.GoogleGenAiChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/gemini")
@CrossOrigin("*")
public class GeminiController {

    private GoogleGenAiChatModel chatModel;

    public GeminiController(GoogleGenAiChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/{message}")
    public ResponseEntity<String> getAnswer(@PathVariable String message) {

        String response = chatModel.call(message);

        return ResponseEntity.ok(response);
    }

}
