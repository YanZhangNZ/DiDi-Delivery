import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { MyrequestsComponent } from './myrequests/myrequests.component';
import { PostRequestComponent } from './post-request/post-request.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { MytaskComponent} from './mytask/mytask.component';
import { DriverinfoComponent } from './driverinfo/driverinfo.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'driverregister',component:DriverRegisterComponent},
  {path:'myrequests',component:MyrequestsComponent},
  {path:'mytask',component:MytaskComponent},
  {path:'driverinfo/:id',component:DriverinfoComponent},
  {path:'viewallrequests',component:ViewrequestsComponent},
  {path:'postrequest',component:PostRequestComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:HomeComponent},
]
@NgModule({
  exports :[
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:false})
  ],
  declarations: []
})
export class AppRoutingModule { }
