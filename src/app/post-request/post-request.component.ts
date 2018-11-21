import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { UserService } from '../user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.css']
})
export class PostRequestComponent implements OnInit {

  postRequestForm:FormGroup;
  submitted = false;
  errorMessage:string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private http:HttpClient,
  ) { }

  ngOnInit() {
    let role=this.userService.getRole();
    if(role !="CUSTOMER" ){
      this.router.navigate(['/login']);
    }
    this.postRequestForm = this.formBuilder.group({
      description:['',Validators.required],
      pickupAddress:['',Validators.required],
      destinationAddress:['',Validators.required],
      customerId:[''],
    })
  }
  get f(){
    return this.postRequestForm.controls;
  }

  onSubmit(){
    
    let userId = this.userService.getUserId();
    this.submitted = true;
    this.postRequestForm.controls['customerId'].setValue(userId);
    console.log(this.postRequestForm.value);
   
    

    //stop here if form is invalid
    if(this.postRequestForm.invalid){
      return;
    }
    
    this.userService.postRequest(this.postRequestForm.value)
      .pipe(first())
      .subscribe(
        res => {console.log("post succesfully");this.router.navigate(['/home'])},
        err => {this.errorMessage="Oops something goes wrong.Please try again."}
      );
  }


}
