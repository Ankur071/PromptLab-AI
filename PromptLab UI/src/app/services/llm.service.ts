import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LlmService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:8080/api';

    fetchModelResponse(modelId: string, prompt: string): Observable<string> {
        const encodedPrompt = encodeURIComponent(prompt);
        return this.http.get(`${this.baseUrl}/${modelId}/${encodedPrompt}`, {
            responseType: 'text'
        }).pipe(
            catchError(error => of(`Error: ${error.message || 'Unknown error occurred'}`))
        );
    }
}
