import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {username: '', email: '', password: ''};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp(): void{
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token)
        },
        err => console.log(err)
      )
  }

}
