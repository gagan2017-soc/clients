import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.Service'; 


@Component({
  selector: 'app-page-admin-member',
  templateUrl: './page-admin-member.component.html',
  styleUrls: ['./page-admin-member.component.css']
})
export class PageAdminMemberComponent implements OnInit {
  UserData:any = [];
  dataSource = this.UserData;
  
  constructor(private authService:AuthenticationService) {
    this.readUsers();
   }

  ngOnInit(): void {
    
    
  }

  readUsers(){
    this.authService.getAll().subscribe((data) => {
      this.UserData = data;
      console.log(this.UserData);
     })    
  }

}
