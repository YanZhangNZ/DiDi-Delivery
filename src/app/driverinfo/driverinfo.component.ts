import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-driverinfo',
  templateUrl: './driverinfo.component.html',
  styleUrls: ['./driverinfo.component.css']
})
export class DriverinfoComponent implements OnInit {
  driverDetail:any;
  errormsg:string;
  driverInfor:any;
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    this.userService.emitDriverInfo.subscribe(
      res=>{
        this.driverDetail=res;
        this.driverInfor = this.driverDetail.driver;
        console.log(this.driverInfor)
      },
      err=>this.errormsg="Oops something wrong happens.",
    )
  }

}
