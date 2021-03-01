import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginProfGuard implements CanActivate {


  constructor(private authService: AuthService,
    private router: Router){

  }


    canActivate(): Promise<boolean>{
      return new Promise(resolve => {
        this.authService.getaAuth().onAuthStateChanged(user => {
          if (user) this.router.navigate(['home-prof']);

          resolve(!user ? true : false)
        })
      })

    }

}
