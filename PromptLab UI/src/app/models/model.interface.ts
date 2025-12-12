export interface LlmModel {
  id: string;
  name: string;
  color: string;
  icon: string;
  iconImage?: string;
}

export interface ModelResponse {
  openai: string;
  gemini: string;
  deepseek: string;
}

export interface LoadingState {
  openai: boolean;
  gemini: boolean;
  deepseek: boolean;
}
