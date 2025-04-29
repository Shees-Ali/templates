import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkModeSubject: BehaviorSubject<boolean>;
  public isDarkMode$: Observable<boolean>;

  private readonly THEME_KEY = 'darkMode';

  constructor() {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    // Use saved theme or system preference
    const initialValue =
      savedTheme !== null ? savedTheme === 'true' : prefersDark;

    this.isDarkModeSubject = new BehaviorSubject<boolean>(initialValue);
    this.isDarkMode$ = this.isDarkModeSubject.asObservable();

    // Apply theme on initialization
    this.applyTheme(initialValue);
  }

  /**
   * Toggle between light and dark mode
   */
  toggleDarkMode(): void {
    const newValue = !this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(newValue);
    this.applyTheme(newValue);
    localStorage.setItem(this.THEME_KEY, newValue.toString());
  }

  /**
   * Set dark mode explicitly
   * @param isDarkMode boolean indicating whether to enable dark mode
   */
  setDarkMode(isDarkMode: boolean): void {
    this.isDarkModeSubject.next(isDarkMode);
    this.applyTheme(isDarkMode);
    localStorage.setItem(this.THEME_KEY, isDarkMode.toString());
  }

  /**
   * Apply theme to document and HTML element
   * @param isDarkMode boolean indicating whether to apply dark mode
   */
  private applyTheme(isDarkMode: boolean): void {
    const element = document.querySelector('html');
    if (isDarkMode) {
      element!.classList.add('dark-mode');
    } else {
      element!.classList.remove('dark-mode');
    }
  }

  /**
   * Get the current theme mode
   * @returns boolean indicating whether dark mode is active
   */
  isDarkModeEnabled(): boolean {
    return this.isDarkModeSubject.value;
  }
}
