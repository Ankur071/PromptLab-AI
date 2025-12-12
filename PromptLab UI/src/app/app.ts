import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Textarea } from 'primeng/textarea';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Badge } from 'primeng/badge';
import { Tooltip } from 'primeng/tooltip';
import { ThemeService } from './services/theme.service';
import { LlmService } from './services/llm.service';
import { LlmModel } from './models/model.interface';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    Button,
    Card,
    Textarea,
    ProgressSpinner,
    Badge,
    Tooltip
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly themeService = inject(ThemeService);
  private readonly llmService = inject(LlmService);

  // Signals for state management
  sharedPrompt = signal('');
  responses = signal<Record<string, string>>({
    openai: '',
    gemini: '',
    deepseek: ''
  });
  loading = signal<Record<string, boolean>>({
    openai: false,
    gemini: false,
    deepseek: false
  });
  responseOrder = signal<string[]>([]);

  // Computed values
  isDarkMode = computed(() => this.themeService.isDarkMode());
  isAnyLoading = computed(() => Object.values(this.loading()).some(status => status));
  isSubmitDisabled = computed(() => this.isAnyLoading() || !this.sharedPrompt().trim());

  // Model definitions
  models: LlmModel[] = [
    { id: 'openai', name: 'OpenAI (GPT-5.1)', color: '#10B981', icon: 'pi pi-bolt', iconImage: 'openai-icon.png' },
    { id: 'gemini', name: 'Google Gemini', color: '#3B82F6', icon: 'pi pi-google', iconImage: 'gemini-icon.png' },
    { id: 'deepseek', name: 'DeepSeek', color: '#F59E0B', icon: 'pi pi-search', iconImage: 'deepseek-icon.png' }
  ];

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onPromptChange(value: string): void {
    this.sharedPrompt.set(value);
  }

  handleSubmit(): void {
    if (!this.sharedPrompt().trim()) return;

    // Reset response order
    this.responseOrder.set([]);

    // Set all models to loading
    this.loading.set({
      openai: true,
      gemini: true,
      deepseek: true
    });

    // Initialize all responses as loading
    this.responses.set({
      openai: 'Loading...',
      gemini: 'Loading...',
      deepseek: 'Loading...'
    });

    // Process each model independently
    this.models.forEach(model => {
      this.llmService.fetchModelResponse(model.id, this.sharedPrompt())
        .subscribe({
          next: (response) => {
            // Update this specific model's response
            this.responses.update(prev => ({
              ...prev,
              [model.id]: response
            }));

            // Add this model to the response order
            this.responseOrder.update(prev => [...prev, model.id]);

            // Set this model's loading state to false
            this.loading.update(prev => ({
              ...prev,
              [model.id]: false
            }));
          },
          error: (error) => {
            this.responses.update(prev => ({
              ...prev,
              [model.id]: `Error: ${error.message}`
            }));

            this.loading.update(prev => ({
              ...prev,
              [model.id]: false
            }));
          }
        });
    });
  }

  getModelByIndex(index: number): LlmModel {
    const modelId = this.responseOrder()[index];
    return this.models.find(m => m.id === modelId) || this.models[0];
  }

  getResponsePosition(modelId: string): number {
    return this.responseOrder().indexOf(modelId) + 1;
  }

  isFirstResponder(modelId: string): boolean {
    return this.responseOrder()[0] === modelId;
  }

  hasResponded(modelId: string): boolean {
    return this.responseOrder().includes(modelId);
  }
}
