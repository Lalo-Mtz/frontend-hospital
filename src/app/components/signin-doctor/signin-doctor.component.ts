import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

// Our Process
import { AuthService } from '../../services/auth.service';

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
            
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', 'doctor');


            this.router.navigate(['/doctor']);
          }
        },
        err => {
          console.log(err);
        }
      )
  }

}

