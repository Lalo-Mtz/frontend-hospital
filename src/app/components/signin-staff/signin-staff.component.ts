import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Our procces
import { AuthService } from '../../services/auth.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin-staff',
  templateUrl: './signin-staff.component.html',
  styleUrls: ['./signin-staff.component.css']
})
export class SigninStaffComponent implements OnInit {

  staff = { username: "", password: "" }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signInStaff(this.staff)
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
          localStorage.setItem('user', 'staff');
          this.router.navigate(['/staff']);
        },
        err => {
          console.log(err)
          var textError = err.error.message;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${textError}`
          });
          this.staff.username = '';
          this.staff.password = '';
        }
      )
  }
}
