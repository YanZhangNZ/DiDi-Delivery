import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { pipe } from '@angular/core/src/render3/pipe';
import {Router, ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-myrequests',
  templateUrl: './myrequests.component.html',
  styleUrls: ['./myrequests.component.css']
})
export class MyrequestsComponent implements OnInit {
  requestList:any;
  showDetails=false;
  driverinfo:any;
  driverDetail:any;

  constructor(
    private userService:UserService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    
    

    let role=this.userService.getRole();
    if( role !='CUSTOMER'){
      
      this.router.navigate(['/login'])
    }
    let customerId = this.userService.getUserId();
    this.userService.getMyRequest(customerId)
    .subscribe(
      res=>{
        console.log("get succesfully");
        this.requestList=res;
      },
      err=>console.log(err),
    )
  }

  showDriverDetails(id){
    this.showDetails = !this.showDetails;


   this.userService.getDriverInfo(id);
  }
  closeDetails(){
    this.showDetails = false;
  }

}
