import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.css']
})
export class MytaskComponent implements OnInit {
  taskList:any;
  driverId:any;
  constructor(
    private userService: UserService,
    private router:Router,
  ) { }

  ngOnInit() {
    
    let role=this.userService.getRole();
    if( role !='DRIVER'){
      
      this.router.navigate(['/login'])
    }
    this.driverId = this.userService.getUserId();
    this.userService.getDriverRequest(this.driverId)
    .subscribe(
      res=>{
        this.taskList=res;
        console.log(this.taskList);
      },
      err=>console.log(err),
    )
  }

  getObj(id){
    let map=new Map();  
    let obj:any;  
    this.taskList.map(cv=>{
      if(cv.id == id){
        map.set("id",cv.id)
        .set("customerId",cv.customerId)
        .set("driverId",this.driverId)
        .set("description",cv.description)
        .set("pickupAddress",cv.pickupAddress)
        .set("destinationAddress",cv.destinationAddress);
        switch(cv.status){
          case "ACCEPTED":
            map.set("status",'IN_TRANSIT');
            break;
          case 'IN_TRANSIT':
            map.set("status",'DELIVERED');
            break;
          case 'DELIVERED':
            map.set("status",'DELIVERED');
            break;
          
        }
      }
     
    })

    return obj = Array.from(map.entries()).reduce((main, [key, value]) => ({...main, [key]: value}), {});
  }
  changeStatus(id,obj:any){
    obj = this.getObj(id);

    this.userService.undertakeTask(id,obj)
    .subscribe(
      res=>{
        let response = res; 
        var task = this.taskList.find(x=>x.id ==id);
        task.status = response['status'];  
      },
      err=>console.log("Oops what's wrong?")
    );

  }
  cancelTask(id,obj:any){
    obj = this.getObj(id);

    if(obj.status !="IN_TRANSIT"){
      window.alert("sorry, request in transit or compeleted cannot be cancelled.")
    }else{
      obj.status="AVAILABLE";
      this.userService.undertakeTask(id,obj)
      .subscribe(
        res=>{
          let response = res; 
          var task = this.taskList.find(x=>x.id ==id);
          task.status = response['status'];  
        },
        err=>console.log("Oops what's wrong?")
      );
    }
  }

}
