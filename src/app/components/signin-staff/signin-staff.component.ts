import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Our procces
import { AuthService } from '../../services/auth.service';


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
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', 'staff');
          this.router.navigate(['/staff']);
        },
        err => console.log(err)
      )
  }
}
