import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthcService } from '../services/authc.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCliGuard implements CanActivate {


  constructor(private authService: AuthcService,
    private router: Router){

  }


    canActivate(): Promise<boolean>{
      return new Promise(resolve => {
        this.authService.getaAuth().onAuthStateChanged(user => {
          if (user) this.router.navigate(['home-cli']);

          resolve(!user ? true : false)
        })
      })

    }

}
