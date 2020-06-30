import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  flattype: string;
   basemain: number;
   nonocc: number;
    total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { flattype: '1BHK', basemain: 1500 , nonocc: 150.00, total: 1650.00},
  { flattype: '2BHK', basemain: 2000 , nonocc: 200.00, total: 2200.00},
  { flattype: '3BHK', basemain: 2300 , nonocc: 230.00, total: 2530.00},
];
@Component({
  selector: 'app-page-man-payment',
  templateUrl: './page-man-payment.component.html',
  styleUrls: ['./page-man-payment.component.css']
})
export class PageManPaymentComponent implements OnInit {
  displayedColumns: string[] = ['flattype', 'basemain', 'nonocc', 'total'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
