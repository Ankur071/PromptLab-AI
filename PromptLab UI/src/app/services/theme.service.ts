import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly THEME_KEY = 'promptlab-theme';

    isDarkMode = signal<boolean>(this.getInitialTheme());

    constructor() {
        effect(() => {
            this.applyTheme(this.isDarkMode());
        });
    }

    private getInitialTheme(): boolean {
        const saved = localStorage.getItem(this.THEME_KEY);
        if (saved !== null) {
            return saved === 'dark';
        }
        // Default to dark theme
        return true;
    }

    private applyTheme(isDark: boolean): void {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
    }

    toggleTheme(): void {
        this.isDarkMode.update(current => !current);
    }
}
