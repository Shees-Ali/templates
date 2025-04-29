import { Component, inject, Injector } from '@angular/core';
import { ImportsModule } from '../../imports/imports.module';
import { BasePage } from '../../base/base';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [ImportsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent extends BasePage {
  isSubmenuVisible: boolean = false;
  constructor(injector: Injector) {
    super(injector);
  }
  toggleSubmenu() {
    this.isSubmenuVisible = this.isSubmenuVisible ? false : true;
  }

  goTo(route: string, params?: { isProject?: boolean }) {
    this.nav.navigateTo(route, params ? { queryParams: params } : undefined);
  }

  goToSettings() {}
  logOut() {}
}
