import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AllGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authService.loggedIn() && (this.authService.getUser() == 'doctor' || this.authService.getUser() == 'nurse' || this.authService.getUser() == 'staff')) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }

}
