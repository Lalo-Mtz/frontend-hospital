import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(){
    if(this.authService.loggedIn() && this.authService.getUser() == 'doctor') {
      return true;
    }
    this.router.navigate(['/signin-doctor']);
    return false;
  }

}
