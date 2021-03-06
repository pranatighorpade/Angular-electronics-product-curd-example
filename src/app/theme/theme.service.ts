import { Injectable } from '@angular/core';
import { darkTheme } from '../theme/dark-theme';
import { lightTheme } from '../theme/light-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleDark(): void {
    this.setTheme(darkTheme);
  }

  toggleLight(): void {
    this.setTheme(lightTheme);
  }

  public setTheme(theme: {}): void {
    Object.keys(theme).forEach((k) =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}
