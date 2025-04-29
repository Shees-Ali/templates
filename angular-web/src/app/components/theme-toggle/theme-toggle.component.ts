import { Component, EventEmitter, Output } from '@angular/core';
import { ImportsModule } from '../../imports/imports.module';
import { ThemeService } from '../../services/utility/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [ImportsModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  @Output() toggleEvent: EventEmitter<void> = new EventEmitter<void>();
  isActive = false;
  selectedOption: string = '';

  constructor(themeService: ThemeService) {
    themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isActive = isDarkMode;
    });
  }

  toggle() {
    this.isActive = !this.isActive;
    this.toggleEvent.emit();
  }
}
