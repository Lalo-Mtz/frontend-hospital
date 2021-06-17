import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

// Our Process
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin-doctor',
  templateUrl: './signin-doctor.component.html',
  styleUrls: ['./signin-doctor.component.css']
})
export class SigninDoctorComponent implements OnInit {

  doctor = { email: "", password: "" };

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signIn(this.doctor)
      .subscribe(
        res => {
          if (res.auth) {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: `Welcome ${res.username}!!`,
              showConfirmButton: false,
              timer: 2000
            });
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', 'doctor');
            this.router.navigate(['/doctor']);
          }
        },
        err => {
          var textError = err.error.message;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${textError}`
          });
          this.doctor.email = '';
          this.doctor.password = '';
        }
      )
  }

}

