
package com.telusko.SpringAIDemo;

import org.springframework.ai.deepseek.DeepSeekChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/deepseek")
@CrossOrigin("*")
public class DeepSeekController {

    private DeepSeekChatModel chatModel;

    public DeepSeekController(DeepSeekChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/{message}")
    public ResponseEntity<String> getAnswer(@PathVariable String message) {

        String response = chatModel.call(message);

        return ResponseEntity.ok(response);
    }

}
