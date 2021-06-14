import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  
  canActivate(){
    if(this.authService.loggedIn() && this.authService.getUser() == 'staff') {
      return true;
    }
    this.router.navigate(['/signin-staff']);
    return false;
  }
}
