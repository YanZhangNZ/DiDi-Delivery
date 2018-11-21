import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { UserService } from '../user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.css']
})
export class DriverRegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
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
      role:['DRIVER'],
      username:['',Validators.required],
      name:['',Validators.required],
      birthDate:[''],
      address:[''],
      phone:['',[Validators.required,Validators.minLength(6),Validators.pattern('^[0-9]+')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      carModel:['',Validators.required],
      carYear:['',Validators.required],
      carColour:['',Validators.required],
      carLicensePlate:['',Validators.required]
    });
    
  }
  
  get f(){
    return this.registerForm.controls;
    
  }


  onSubmit(){
    this.submitted = true;
    //stop here if form is invalid
    if(this.registerForm.invalid){
      console.log('invalid input')
      return;
    }

    console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        res => {console.log("register succesfully");this.router.navigate(['/login'])},
        err => {console.log("an error happens")}
      );
  }

}
