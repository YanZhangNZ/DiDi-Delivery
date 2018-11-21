import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { pipe } from '@angular/core/src/render3/pipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.css']
})
export class ViewrequestsComponent implements OnInit {
  requestList:any;
  action="pickup";
  driverId:any;

  constructor(
    private userService:UserService,
    private router:Router,
  ) { }

  ngOnInit() {
    
    let role=this.userService.getRole();
    if( role == null || !role || role =='CUSTOMER'){
      this.router.navigate(['/login'])
    }
    this.driverId = this.userService.getUserId();
    this.userService.viewAllReqeust()
    .subscribe(
      res=>{this.requestList=res;console.log(this.requestList)},
      err=>console.log(err),
    )
  }
  pickup(id,obj:any){
    let map=new Map();
    
    this.requestList.map(cv=>{
      if(cv.id == id){
        map.set("id",cv.id)
        .set("customerId",cv.customerId)
        .set("driverId",this.driverId)
        .set("description",cv.description)
        .set("pickupAddress",cv.pickupAddress)
        .set("destinationAddress",cv.destinationAddress)
        .set("status","ACCEPTED");
      }
     
    })
    obj = Array.from(map.entries()).reduce((main, [key, value]) => ({...main, [key]: value}), {});
    console.log(obj);

    this.userService.undertakeTask(id,obj)
    .subscribe(
      res=>{
        let response = res; 
        var request = this.requestList.find(x=>x.id ==id);
        request.status = response['status']; 
        // console.log(res);
      },
      err=>console.log("Oops what's wrong?")
    );
  }

}
