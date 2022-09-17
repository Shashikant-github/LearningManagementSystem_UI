import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteService } from '../services/route.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:RouteService) { }
  tokenStatus?:boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// let tokenStatusLocalStorage=localStorage.getItem('MyToken');
// this.tokenStatus=tokenStatusLocalStorage==null?false:true;
// if(this.tokenStatus){
//   return true;
// }
// else{
//  // this.router.goToLogin();
//   return true;
// }
    return true;
  }
  
}
