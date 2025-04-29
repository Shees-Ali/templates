import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/**
 * Service that intercepts HTTP requests to add authorization and language headers
 * Implements HttpInterceptor to modify outgoing requests
 */
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  /**
   * Intercepts all HTTP requests
   * @param req The original HTTP request
   * @param next The HTTP handler to continue the request chain
   * @returns An observable of the HTTP event stream
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.callToken()).pipe(
      switchMap((token) => {
        // Get the current selected language
        const cloneRequest = this.addHeaders(req, token);
        return next.handle(cloneRequest);
      })
    );
  }

  /**
   * Retrieves the authentication token from local storage
   * @returns A promise containing the token
   */
  callToken(): Promise<string | null> {
    return new Promise(async (resolve) => {
      const token = localStorage.getItem('access_token');
      resolve(token);
    });
  }

  /**
   * Adds authentication, content, and language headers to the request
   * @param request The original HTTP request
   * @param token The token value to add to Authorization header
   * @param language The current language to add as a header
   * @returns A cloned request with added headers
   */
  private addHeaders(request: HttpRequest<any>, token: any): HttpRequest<any> {
    // Set up Bearer token if available
    const authHeader = token ? `Bearer ${token}` : '';

    // Initialize headers object
    const headers: any = {
      Authorization: authHeader,
      Accept: 'application/json',
    };

    // Preserve Content-Type if it's application/json
    const contentType = request.headers.get('Content-Type');
    if (contentType === 'application/json') {
      headers['Content-Type'] = contentType;
    }

    // Clone the request with the new headers
    return request.clone({
      setHeaders: headers,
    });
  }
}
