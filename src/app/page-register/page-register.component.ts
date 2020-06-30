import { Component, OnInit, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { UserService} from '../service/user.service';


@Component({ 
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent implements OnInit {

  public selectedOption: string;

  options = [
    { name: "A wing", value: 1 },
    { name: "C Wing", value: 2 },
    { name: "D Wing", value: 3 }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    // private toastr: ToastrService
  ) {
    
   }
   registerForm: FormGroup;
   loading = false;
   submitted = false;
 
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneno: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      wing: ['', [Validators.required,Validators.maxLength(1)]],
      flatno: ['', Validators.required]
  });
  
  }
  get fval() { return this.registerForm.controls; }

  onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.registerForm.value).subscribe(
      (data)=>{
        alert('User Registered successfully!!');
        this.router.navigate(['/login-page']);
     },
      (error)=>{
        // this.toastr.error(error.error.message, 'Error');
        this.loading = false;
      }
    )

  }
}
