import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrl: './layout.page.scss',
  standalone: false,
})
export class LayoutPage extends BasePage implements OnInit {
  sidebarVisible: boolean = false;
  isDarkMode: boolean = false;
  visible: boolean = false;
  isLoggedIn: boolean = false;
  constructor(injector: Injector) {
    super(injector);
    this.themeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnInit() {}
}
