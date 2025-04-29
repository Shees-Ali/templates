import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { UtilityService } from '../utility/utility.service';
import { Observable, Subject } from 'rxjs';

@Injectable()
export abstract class NetworkService {
  private refreshNeeded = new Subject<void>();

  protected constructor(
    public api: ApiService,
    public router: Router,
    public utility: UtilityService
  ) {}

  // Function for making url string from object of url params.
  serialize = (obj: any) => {
    const str: any[] = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        let f: string =
          encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]);
        str.push(f);
      }
    }
    return str.join('&');
  };

  // Function for POST method
  httpPostResponse(
    key: any,
    data: any,
    id = null,
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'post',
      key,
      data,
      id,
      showloader,
      showError,
      contenttype
    );
  }

  // Function for GET method
  httpGetResponse(
    key: any,
    id: any = null,
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'get',
      key,
      {},
      id,
      showloader,
      showError,
      contenttype
    );
  }

  // Function for PUT method
  httpPutResponse(key: any, data: any, _id = null) {
    return new Promise<any>((resolve) => {
      this.api.put(key, data).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  // Function for PATCH method
  httpPatchResponse(key: any, data: any, _id = null) {
    return new Promise<any>((resolve) => {
      this.api.patch(key, data).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  // Function for DELETE method
  httpDeleteResponse(key: any) {
    return new Promise<any>((resolve) => {
      this.api.delete(key).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

  // Main function for making HTTP calls.
  httpResponse(
    type = 'get',
    key: any,
    data: any,
    id = null,
    showloader = false,
    _showError = true,
    _contenttype = 'application/json'
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      if (showloader === true) {
        this.utility.showLoader();
      }

      const url = key + (id ? '/' + id : '');

      const seq =
        type === 'get' ? this.api.get(url, {}) : this.api.post(url, data);

      seq.subscribe({
        next: (res) => {
          if (showloader === true) {
            this.utility.hideLoader();
          }
          resolve(res);
        },
        error: (err) => {
          console.log(err);
          this.utility.hideLoader();
          this.utility.presentFailureAlert(err.error.message);
          if (err.status == 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user_role');
            this.router.navigate(['']);
          }
          reject(err.error);
        },
      });
    }).catch((err) => {
      if (err.status == 'Error') {
        this.utility.presentFailureAlert(err.message);
        if (err.message == 'User Not Logged In!') {
          this.router.navigate(['']);
        }
      }
    });
  }

  refreshDashboard() {
    this.refreshNeeded.next();
  }

  getRefreshNeededListener(): Observable<void> {
    return this.refreshNeeded.asObservable();
  }
}
