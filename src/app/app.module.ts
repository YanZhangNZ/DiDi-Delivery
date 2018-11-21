import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyrequestsComponent } from './myrequests/myrequests.component';
import { PostRequestComponent } from './post-request/post-request.component';
import { DriverRegisterComponent } from './driver-register/driver-register.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { MytaskComponent } from './mytask/mytask.component';
import { DriverinfoComponent } from './driverinfo/driverinfo.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MyrequestsComponent,
    PostRequestComponent,
    DriverRegisterComponent,
    ViewrequestsComponent,
    MytaskComponent,
    DriverinfoComponent
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    FormsModule,
    BrowserModule,  
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,  
    AppRoutingModule,
  ],
  providers: [ ],
})
export class AppModule { }
