import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../service/authentication.Service';
@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService : AuthenticationService,
    // private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
   // for accessing to form fields
   get fval() { return this.loginForm.controls; }

   onFormSubmit() {
     this.submitted = true;
     if (this.loginForm.invalid) {
       return;
     }
 
     this.loading = true;
      this.authenticationService.login(this.fval.email.value, this.fval.password.value)
         .subscribe(
             data => {
              localStorage.setItem('isLoggedIn', "true");  
              localStorage.setItem('token', this.fval.email.value);
               if (this.fval.email.value === "r@gmail.com"){
                this.router.navigate(['/admin-page']);
               } else{
               this.router.navigate(['/member-page']);
               }
             },
             error => {
               //this.toastr.error(error.error.message, 'Error');
                 this.loading = false;
                 this.router.navigate(['/register-page']);
             });
   }   }

