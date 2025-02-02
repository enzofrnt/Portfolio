import { isPlatformBrowser } from '@angular/common';
import { effect, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkModeSignal = signal<string>('dark');

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      // Récupérer le thème sauvegardé ou utiliser le thème sombre par défaut
      const savedTheme = localStorage.getItem('darkModeSignal');
      if (savedTheme) {
        this.darkModeSignal.set(JSON.parse(savedTheme));
      } else {
        // Définir le thème sombre par défaut
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.body.setAttribute('data-bs-theme', 'dark');
      }

      effect(() => {
        localStorage.setItem(
          'darkModeSignal',
          JSON.stringify(this.darkModeSignal()),
        );
      });
    }
  }

  updateDarkMode(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.darkModeSignal.update((value) => {
        const newTheme = value === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        document.body.setAttribute('data-bs-theme', newTheme);
        return newTheme;
      });
    }
  }
}
