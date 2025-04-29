import { Component, Injector } from '@angular/core';
import { BasePage } from '../../base/base';
import { ImportsModule } from '../../imports/imports.module';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-topbar',
  imports: [ImportsModule, ThemeToggleComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent extends BasePage {
  checked = false;
  constructor(injector: Injector) {
    super(injector);
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.checked = isDarkMode;
    });
  }

  goTo(arg0: string) {
    throw new Error('Method not implemented.');
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
