import { Component, OnInit } from '@angular/core';
import {TranscationService} from '../service/transcation.service';

@Component({
  selector: 'app-page-member-viewtrans',
  templateUrl: './page-member-viewtrans.component.html',
  styleUrls: ['./page-member-viewtrans.component.css']
})
export class PageMemberViewtransComponent implements OnInit {
  TransData: any = [];
  datasource = this.TransData;
  constructor(private transcationService:TranscationService) {
    this.readtransactions();
   }

  ngOnInit(): void {
  }
  readtransactions(){
    this.transcationService.getAll().subscribe((data) => {
      this.TransData = data;
      console.log(this.TransData);
     })    
  }
}
