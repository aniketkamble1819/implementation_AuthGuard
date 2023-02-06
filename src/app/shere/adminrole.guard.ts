import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminroleGuard implements CanActivate {


  canActivate(){

    if(localStorage.getItem("usertype")== "Admin")
    return true;
    window.alert("you are not authrized")
    return false;
  }

}
