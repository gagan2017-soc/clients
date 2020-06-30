import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { Router } from '@angular/router';
//import { transaction } from '../models/transaction';
import {TranscationService} from '../service/transcation.service';

@Component({
  selector: 'app-page-trans-entry',
  templateUrl: './page-trans-entry.component.html',
  styleUrls: ['./page-trans-entry.component.css']
})
export class PageTransEntryComponent implements OnInit {
  public selectedOption: string;

  options = [
    { name: "NEFT", value: 1 },
    { name: "IMPS", value: 2 },
    { name: "CHEQUE", value: 3 },
    { name: "CASH", value: 4 }
  ]
  constructor(
    private formBuildert: FormBuilder,
    private router: Router,
    private transcationService : TranscationService,
  ) { }
  transactionForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit(): void {
      this.transactionForm = this.formBuildert.group({
      entrydt: ['', Validators.required],
       narration: ['', Validators.required],
      mode: ['', Validators.required], 
      clearingdt: ['', Validators.required],
      amount: ['', Validators.required],
      flatno:['',Validators.required],
      frommonth:['',Validators.required],
      fromyear:['',Validators.required],
      tomonth:['',Validators.required],
      toyear:['',Validators.required],
      receiptgen:['',Validators.required],
       receiptnumber:['',Validators.required]
  });
  }
  get fval() { return this.transactionForm.controls; }

  onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.transactionForm.invalid) {
      return;
    }
    this.loading = true;
    this.transcationService.register(this.transactionForm.value).subscribe(
      (data)=>{
        alert('Transaction Registered successfully!!');
     //   this.router.navigate(['/login-page']);
     },
      (error)=>{
        // this.toastr.error(error.error.message, 'Error');
        alert('Transaction Registered Error!!');
        this.loading = false;
      } 
    )

  }

}
