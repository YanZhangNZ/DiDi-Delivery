import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService, 
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // return new Observable((observer) => {
    // });

    let requiredRole = this.userService.getRole();
    if (requiredRole == 'DRIVER') {
        return true;
    }
    return false;
  }
}

