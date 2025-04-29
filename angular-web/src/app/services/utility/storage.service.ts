import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  // Set data in local storage
  set(key: string, data: any): Promise<boolean> {
    return new Promise((resolve) => {
      localStorage.setItem(key, JSON.stringify(data));
      resolve(true);
    });
  }
  // Get data from local storage
  get(key: string): Promise<any> {
    return new Promise((resolve) => {
      const data = localStorage.getItem(key);
      resolve(data ? JSON.parse(data) : null);
    });
  }
}
