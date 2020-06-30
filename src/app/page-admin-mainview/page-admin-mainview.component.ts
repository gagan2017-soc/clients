import { Component, OnInit } from '@angular/core';
import {TranscationService} from '../service/transcation.service';
import { SelectItem } from 'primeng/api';
import {Transcation} from '../models/transcation';


@Component({
  selector: 'app-page-admin-mainview',
  templateUrl: './page-admin-mainview.component.html',
  styleUrls: ['./page-admin-mainview.component.css']
})
export class PageAdminMainviewComponent implements OnInit {
  TransData:any = [];
  
  dataSource = this.TransData;
  modes: SelectItem[];
  constructor(private transcationService : TranscationService) {
    this.modes = [
      {label: 'NEFT', value: 'NEFT'},
      {label: 'IMPS', value: 'IMPS'},
      {label: 'CHEQUE', value: 'CHEQUE'},
      {label: 'CASH', value: 'CASH'},
      {label: 'UPI', value: 'UPI'},
  ];
    
    this.readtransactions();
   }

  ngOnInit(): void {
   
  }
  readtransactions(){
    this.transcationService.getAll().subscribe((data) => {
      this.TransData = data;
   //   console.log(this.TransData);
     })    
  }
  onRowEditInit(TransData:Transcation){};
  onRowEditSave(TransData:Transcation){
    this.transcationService.updateTrans(TransData).subscribe(
      (data)=>{
        alert('User Updated successfully!!');
      
     },
      (error)=>{
        // this.toastr.error(error.error.message, 'Error');
      
      }
    );
  };
  onRowEditCancel(trandata:Transcation, i: Number){}
}

