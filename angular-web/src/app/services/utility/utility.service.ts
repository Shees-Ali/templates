import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  /* Utlity Functions for 
    - Showing and Hiding loader 
    - Showing Success of Failure Alert using Swal
    - Present a Confirm Alert using Swal
  */

  isLoading: Subject<boolean> = new Subject();

  constructor() {}

  showLoader() {
    this.isLoading.next(true);
  }

  hideLoader() {
    this.isLoading.next(false);
  }

  presentSuccessAlert(msg: string, showConfirm: boolean = false) {

  }

  presentAlert(msg: string, showConfirm: boolean = false) {

  }

  presentFailureAlert(msg: string, showConfirm: boolean = false) {

  }

  presentConfirm(
    text: string = "You won't be able to revert this!",
    confirmTxt: string = 'Yes, delete it!',
    title: string = 'Are you sure?',
    cancelButtonText: string = 'cancel'
  ) {
    return new Promise((resolve) => {

    });
  }

  // Password Complexity Validator
  passwordComplexityValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const value = control.value;
    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const isValid =
      hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;
    return !isValid ? { passwordComplexity: true } : null;
  }

  // Date format to ISO
  formatDateToISO(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Group By Function
  groupBy(xs: any[], key: string | number) {
    return xs.reduce(
      (rv: { [key: string]: any[] }, x: { [key: string]: string | number }) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      },
      {} as { [key: string]: any[] }
    );
  }
}
