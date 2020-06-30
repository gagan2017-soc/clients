import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-member-display',
  templateUrl: './page-member-display.component.html',
  styleUrls: ['./page-member-display.component.css']
})
export class PageMemberDisplayComponent implements OnInit {
  dashboard : boolean=false;
  profile : boolean= false;
  viewtrans: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  action(name:String){
    this.dashboard=false;
    this.profile=false;
    this.viewtrans=false;
    
    if(name=='dashboard'){
      this.dashboard=true;
    }
    if(name=='profile'){
      this.profile=true;
    }
    if(name=='viewtrans'){
      this.viewtrans=true;
    }
  }
}
