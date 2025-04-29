import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  selectedSystem: string | null = '';
  headerText: string = '';

  constructor() {
    this.setSelectedSystem();
  }

  setSelectedSystem() {
    localStorage.getItem('selectedSystem')
      ? (this.selectedSystem = localStorage.getItem('selectedSystem'))
      : (this.selectedSystem = '');
  }

  headerSelectedSystem(system: string) {
    this.selectedSystem = system;
    localStorage.setItem('selectedSystem', system);
  }
}
