import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

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
    if (this.user.username != '' && this.user.email != '' && this.user.password != '') {
      this.authService.signUp(this.user)
        .subscribe(
          res => {
            this.router.navigate(['/doctor']);
            // Swal.fire({
            //   position: 'top-end',
            //   icon: 'success',
            //   title: 'Your acount has been saved',
            //   showConfirmButton: false,
            //   timer: 5000
            // })
            Swal.fire({
              title: "Verify your email",
              text: "We send a confirmation to your email. Check it out",
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            });
          },
          err => {
            console.log(err);
          }
        );
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to fill all the fields',
        footer: 'Check that none are missing'
      });
    }
  }

}
