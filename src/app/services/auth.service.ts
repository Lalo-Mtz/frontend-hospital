import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(user: any) {
    return this.http.post<any>(this.URL + '/doctor/signup', user);
  }

  signIn(user: any) {
    return this.http.post<any>(this.URL + '/doctor/signin', user);
  }

  signInNurse(nurse: any) {
    return this.http.post<any>(this.URL + '/nurse/signin', nurse);
  }

  signInStaff(staff: any) {
    return this.http.post<any>(this.URL + '/staff/signin', staff);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  offlineDoctor() {
    return this.http.get<any>(this.URL + '/doctor/offline');
  }

  inlineDoctor() {
    return this.http.get<any>(this.URL + '/doctor/inline');
  }

  offline() {
    if (localStorage.getItem('user') == 'doctor') {
      this.offlineDoctor()
        .subscribe(
          res => { },
          err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${err.error.message}`
            });
          }
        )
    }
  }

  inline(){
    if (localStorage.getItem('user') == 'doctor') {
      this.inlineDoctor()
        .subscribe(
          res => { },
          err => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${err.error.message}`
            });
          }
        )
    }
  }

  logout() {
    this.offline();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: `Bye bye!!`,
      showConfirmButton: false,
      timer: 2000
    });
  }
}
