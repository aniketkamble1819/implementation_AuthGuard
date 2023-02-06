import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shere/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  constructor(private authservice:AuthService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  logout(){
    this.authservice.logout();

  }

}
