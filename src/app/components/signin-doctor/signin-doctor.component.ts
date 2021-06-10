import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin-doctor',
  templateUrl: './signin-doctor.component.html',
  styleUrls: ['./signin-doctor.component.css']
})
export class SigninDoctorComponent implements OnInit {

  doctor = { email: "", password: "" };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signIn(this.doctor)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/doctor']);
        }, 
        err => console.log(err)
      )
  }

}

