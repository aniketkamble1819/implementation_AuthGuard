import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private roter:Router) { }
  setToken(token:string){
    localStorage.setItem("token", token);
  }
  getToken(token:string){
    localStorage.getItem("token");
  }
  isLoggedIn(){
    if(localStorage.getItem("token") != null)
    return true;
    else
    return false;
  }
  logout(){
    localStorage.clear();
    this.roter.navigate(['/'])
  }

  login(data:any):any{
    if(data.email == "admin@gmail.com" && data.password == "admin"){
    this.setToken("awsfeaefsfawscfdeeesffesaefaefe");
    return{status:"succses", data:{name:"aniket", email:"aniket@gmail.com",usertype:"Admin"}};
  }
  else if(data.email == "manager@gmail.com" && data.password == "manager"){
    this.setToken("awsfeaefsfawscfdeeesffesaefaefe");
    return{status:"succses", data:{name:"manager", email:"manger@gmail.com",usertype:"manager"}};
  }
  else{
    return{status:"failed"}
  }
}
}
