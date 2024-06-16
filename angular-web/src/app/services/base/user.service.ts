import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: any;
  constructor(public network: NetworkService, public router: Router) {}

  async getUserAPI() {
    const res = await this.network.getCurrentUser();
    if (res?.user) {
      this.user = res.user;
    }
  }

  async getCurrentUser() {
    if (!this.user) {
      await this.getUserAPI();
    }
    return this.user;
  }

  async login(creds: any) {
    const res = await this.network.login(creds).catch((error)  => {
      console.log(error);
    });
    localStorage.setItem('token', res.token);
    localStorage.setItem('user_role', res.role[0])
    return res;
  }


  logout() {
    this.user = null;
    this.router.navigate(['']);
    localStorage.removeItem('token');
    localStorage.removeItem('user_role');
  }
}
