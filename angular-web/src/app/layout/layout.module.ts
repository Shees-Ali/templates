import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { RouterOutlet } from '@angular/router';
import { LayoutPage } from './layout.page';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { ImportsModule } from '../imports/imports.module';

@NgModule({
  declarations: [LayoutPage],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterOutlet,
    SidebarComponent,
    TopbarComponent,
    ImportsModule,
  ],
})
export class LayoutModule {}
