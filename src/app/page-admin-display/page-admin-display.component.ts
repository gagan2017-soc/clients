import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.Service';
import { Router } from '@angular/router';
import {User} from '../models/user';


@Component({
  selector: 'app-page-admin-display',
  templateUrl: './page-admin-display.component.html',
  styleUrls: ['./page-admin-display.component.css']
})
export class PageAdminDisplayComponent implements OnInit {
  
  currentUser: User
  dashboard:boolean=true;
  member:boolean=false;
  mainview:boolean=false;
  addmain: boolean=false;

  
  constructor(
   private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
    
    
  }
action(name:String){
  this.dashboard=false;
  this.member=false;
  this.mainview=false;
  this.addmain = false;
  if(name=='dashboard'){
    this.dashboard=true;
  }
  if(name=='member'){
    this.member=true;
  }
  if(name=='mainview'){
    this.mainview=true;
  }
  if(name=='addmain'){
    this.addmain=true;
  }
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login-page']);
  
}
}


