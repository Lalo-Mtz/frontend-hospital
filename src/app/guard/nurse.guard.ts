import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NurseGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(){
    if(this.authService.loggedIn() && this.authService.getUser() == 'nurse') {
      return true;
    }
    this.router.navigate(['/signin-nurse']);
    return false;
  }
  
}
