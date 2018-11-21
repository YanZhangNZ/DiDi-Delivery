import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


export class User {
  role:string;
  username:string;
  email:string;
  phone:string;
  password:string;
  name:string;
  dateOfBirth:Date;
  address:string;
  car:Car;
}

export class Car {
  model:string;
  yeah:number;
  colour:string;
  licensePlate:string;
}
export class postRequest {
  customerId:any;
  descrition:string;
  pickupAddress:string;
  destinationAddress:string;
}
export class acceptRequest {
  id:any;
  customerId:any;
  driverId:any;
  description:string;
  pickupAddress:string;
  destinationAddress:string;
  status:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registerapi = "https://java-web-app-with-spring-eecge.mybluemix.net/api/v1/auth/signup";
  allRequestsapi="https://java-web-app-with-spring-eecge.mybluemix.net/api/v1/delivery/available";
  postRequestapi="https://java-web-app-with-spring-eecge.mybluemix.net/api/v1/delivery/";
  getMyRequestapi="https://java-web-app-with-spring-eecge.mybluemix.net/api/v1/delivery/customer/";
  getDriverRequestapi="https://java-web-app-with-spring-eecge.mybluemix.net/api/v1/delivery/driver/";
  user:any;
  @Output() emitDriverInfo:EventEmitter<Object>=new EventEmitter();
  constructor(
    private http : HttpClient,

  ) { }

  getOptions(){
    let user = JSON.parse(localStorage.getItem('currentUser'));
    return {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${user['accessToken']}`
      })
    };
  }

  getRole(){
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if(user){
      console.log(user);
      let role=user['role'];
      return role;
    }
     
 
  }

  getUserId(){
    let user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);
    if(user){
      let userId = user['userId'];
      return userId;
    }
    
  }

  // getAll() {
  //   return this.http.get<User[]>(`${this.apiUrl}`/user);
  // }


  
  postRequest(postrequest:postRequest){
    return this.http.post(this.postRequestapi, postrequest, this.getOptions())
  }

  register(user: User) {
    return this.http.post(this.registerapi, user)
  }
  
  viewAllReqeust(){
    return this.http.get(this.allRequestsapi,this.getOptions())
  }
  getMyRequest(id){
    return this.http.get(this.getMyRequestapi+id,this.getOptions())
  }
  getDriverRequest(id){
    return this.http.get(this.getDriverRequestapi+id,this.getOptions())
  }
  undertakeTask(id,acceptrequest:acceptRequest){
    return this.http.put(this.postRequestapi+id,acceptrequest,this.getOptions())
  }
  getDriverInfo(id){
    return this.http.get(this.postRequestapi+id,this.getOptions())
    .subscribe(
      res=>this.emitDriverInfo.emit(res),
      err=>console.log("fail to get driver info."),
    );
  }
  // update(user: User) {
  //   return this.http.put(`${this.apiUrl}` + user.id, user);
  // }

  // delete(id: number) {
  //   return this.http.delete(`${this.apiUrl} + id);
  // }

}
