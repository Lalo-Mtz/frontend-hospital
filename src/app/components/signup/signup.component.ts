import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = { username: '', email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(): void {
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/doctor']);
        },
        err => console.log(err)
      )
    
  }

}
