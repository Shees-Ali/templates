import { Injectable } from '@angular/core';
import { NavService } from './nav.service';
import { NetworkService } from './network.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  _user: any;
  avatar = null;

  constructor(
    public utilityProvider: UtilityService,
    public nav: NavService,
    public network: NetworkService
  ) {}

  async login(user: any) {
    // return new Promise(async (resolve) => {
    //   try {
    //     const res = await this.network.login(user);
    //     if (!res) {
    //       resolve(null);
    //       return;
    //     }
    //     let obj = res;
    //     var token = obj.token;
    //     localStorage.setItem('token', token);
    //     resolve(obj);
    //   } catch (err) {
    //     console.error('Error during login:', err);
    //     resolve(null);
    //   }
    // });
  }

  async signUp(data: any): Promise<any> {
    // try {
    //   const res = await this.network.signUp(data);
    //   console.log('res', res);
    //   if (res.status === 200) {
    //     return true;
    //   } else {
    //     console.error(`Unexpected API response status: ${res.status}`);
    //     return false;
    //   }
    // } catch (err) {
    //   console.error('Error during sign-up:', err);
    //   return false;
    // }
  }

  async logout(sw = null) {
    // this.menuCtrl.enable(false, 'authenticated');
    // await this.sqlite.setLogout();
    localStorage.removeItem('token');
    if (!sw) {
      // this.nav.setRoot('pages/tutorial');
      this.nav.setRoot('pages/login');
    } else {
      this.nav.setRoot('pages/login', {
        switchUser: true,
        phone_number: sw['phone_number'],
      });
    }
  }

  public getAllUsers() {
    // return new Promise(async (resolve) => {
    //   this.network.getAllusers().then(
    //     async (res) => {
    //       console.log('sdsdsdsd', res);

    //       res = res.user;
    //       if (res) {
    //         await this.processUserData(res, false);
    //         resolve(res);
    //       } else {
    //         // redirect to steps
    //         this.logout();
    //       }
    //     },
    //     (err) => {
    //       this.logout();
    //     }
    //   );
    // });
  }

  public getActiveUser() {
    // return this.sqlite.getActiveUser();
  }

  public getUser() {
    // return new Promise(async (resolve) => {
    //   this.network.getUser().then(
    //     async (user: any) => {
    //       console.log(user);

    //       // user = user.user;
    //       if (user) {
    //         localStorage.setItem('user', JSON.stringify(user));
    //         //await this.processUserData(user, false);
    //         resolve(user);
    //       } else {
    //         // redirect to steps
    //         this.logout();
    //         resolve(null);
    //       }
    //     },
    //     (err) => {
    //       this.logout();
    //       resolve(null);
    //     }
    //   );
    // });
  }

  async userFlowRedirection(res: any) {
    localStorage.setItem('user_id', res.id);
    localStorage.setItem('username', res.name);
    localStorage.setItem('dail_code', res.dial_code);
    localStorage.setItem('phone_number', res.phone_number);
    localStorage.setItem('role_id', res.role_id);

    if (res.role_id == 3) {
      console.log('guard');
      this.nav.push('./pages/guard/dashboard');
    } else {
      console.log('resident');
      this.nav.push('./pages/user/dashboard');
    }
  }

  async processUserData(user: any, showResetPass = false) {
    return new Promise(async (resolve) => {
      console.log('dsbfjvhbnvjkbhufkdh');

      if (!showResetPass) {
        this.nav.setRoot('pages/tabs');
        resolve(true);
      } else if (showResetPass) {
        // this.nav.setRoot('pages/update-password', { user: saveduser });
        resolve(false);
      }
    });
  }

  setUser(user: any) {
    this._user = user;
  }

  getCurrentUser() {
    return this._user;
  }

  update(data: any, token: any) {
    return {
      data,
      token,
    };
  }
}
