import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { UserService } from '../user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  carForm:FormGroup;
  submitted = false;
  loading = false;
  driverRegister=false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    // private alertService: AlertService,
    private router: Router,
    private http:HttpClient,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      role:['CUSTOMER'],
      username:['',Validators.required],
      name:['',Validators.required],
      birthDate:[''],
      address:[''],
      phone:['',[Validators.required,Validators.minLength(6),Validators.pattern('^[0-9]+')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    });
    // this.registerForm.value['role']='CUSTOMER';
  }

  get f(){
    return this.registerForm.controls;
    
  }


  onSubmit(){
    this.submitted = true;
    // this.registerForm.value. = user["customerId"];
    //stop here if form is invalid
    if(this.registerForm.invalid){
      return;
    }

    this.loading = true;
    
    this.userService.register(this.registerForm.value)
      // .pipe(first())
      .subscribe(
        res => {console.log("register succesfully");this.router.navigate(['/login'])},
        err => {console.log("an error happens"),this.loading=false;}
      );
  }

}
