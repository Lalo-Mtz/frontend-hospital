import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Our procces
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin-nurse',
  templateUrl: './signin-nurse.component.html',
  styleUrls: ['./signin-nurse.component.css']
})
export class SigninNurseComponent implements OnInit {

  nurse = { username: "", password: "" };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signInNurse(this.nurse)
      .subscribe(
        res => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: `Welcome ${res.username}!!`,
            showConfirmButton: false,
            timer: 2000
          });
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', 'nurse');
          this.router.navigate(['/nurse']);
        },
        err => {
          var textError = err.error.message;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${textError}`
          });
          this.nurse.username = '';
          this.nurse.password = '';
        }
      )
  }

}
