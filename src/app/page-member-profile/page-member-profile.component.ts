import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.Service'; 

import {MatTableDataSource} from '@angular/material/table';
import { find, filter } from 'rxjs/operators';
import { getMaxListeners } from 'process';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-page-member-profile',
  templateUrl: './page-member-profile.component.html',
  styleUrls: ['./page-member-profile.component.css']
})
export class PageMemberProfileComponent implements OnInit {
  UserData:any = [];
  //dataSource = this.UserData;
  dataSource: MatTableDataSource<any>;
  filterValue : string;
  
  constructor(private authService: AuthenticationService) {
    
     this.filterValue='mutual';
     this.dataSource = new MatTableDataSource;
     this.getProfile(this.filterValue);
     this.filterValue= 'vinitajha2001@gmail.com' ;
    
   }

  ngOnInit(): void {
   
   
  }
  getProfile(filter: string){
   // this.UserData.email==localStorage.getItem('token');
  
    this.authService.getAll().subscribe((data) => {
          
      
      this.UserData = data;
   //   this.dataSource =this.UserData;
      
   //   filterValue = filterValue.trim(); // Remove whitespace
   //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    //  this.dataSource.filter = filter.trim().toLowerCase();
     // this.dataSource.filteredData;
     // this.UserData= this.dataSource;
      //this.UserData. = localStorage.getItem('token');
      console.log(this.UserData);
      console.log(this.dataSource);
     })    
  }
}
