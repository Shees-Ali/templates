import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
// import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  userRole!: string;
  constructor(
    public location: Location,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) // public userService: UserService
  {
    // this.userService.getUserRole().subscribe((role) => {
    //   this.userRole = role;
    // });
  }

  setRoot(page: any, param = {}) {
    this.navigateTo(page, param);
  }

  push(page: any, param = {}) {
    let extras: NavigationExtras = {
      queryParams: param,
    };
    this.navigateTo(page, extras);
  }

  pop() {
    return new Promise((resolve) => {
      this.location.back();
      resolve(true);
    });
  }

  navigateTo(link: string, data?: NavigationExtras) {
    let initialLink = '';
    if (this.userRole == 'tamayouz') {
      initialLink = 'tamayouz';
    } else if (this.userRole == 'department') {
      initialLink = 'department';
    }
    this.router.navigate([this.userRole + '/' + link], data);
  }

  navigateFromRoot(link: string, data?: NavigationExtras) {
    this.router.navigate([link], data);
  }

  getParams() {
    return this.activatedRoute.snapshot.params;
  }

  getQueryParams() {
    return this.activatedRoute.snapshot.queryParams;
  }
}
