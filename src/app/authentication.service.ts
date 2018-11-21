import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';

const httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      // 'Authorization':'my-auth-token'
    })
  }
export class LoginInfo{
    usernameOrEmail:string;
    password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl='https://java-web-app-with-spring-eecge.mybluemix.net/api/v1/auth/signin';

  constructor(
    private http:HttpClient,
  ) { }
  
  login(logininfo:LoginInfo) {
    return this.http.post<any>(this.apiUrl,logininfo)
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
          if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            console.log(localStorage);
            return user;
            
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}


}
