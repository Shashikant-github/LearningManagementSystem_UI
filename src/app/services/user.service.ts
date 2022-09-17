import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // logic
  user_url=environment.user_api_url;
  public isLoggedIn$: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient) {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
   }
   //https://localhost:5001/api/v1.0/lms/Company/register
  registerUser(regUser: User): Observable<boolean> {
    // return this.httpClient.post<boolean>('https://localhost:5013/v1.0/api/FlightApp/User/registerUser', regUser);
    return this.httpClient.post<boolean>(this.user_url+'register', regUser);
  }
  loginUser(loginInfo: UserInfo):Observable<string> {
   return this.httpClient.post<string>(this.user_url+'Login',loginInfo);
  }
  authUser(token: any) {
    let jsonObj=JSON.stringify(token);
    console.log(jsonObj);
    const parsedJsonRes=JSON.parse(jsonObj);
     //console.log(`JSON Token: ${parsedJsonRes['token']}`);
      localStorage.setItem('MyToken',parsedJsonRes['token']);
      localStorage.setItem('userName',parsedJsonRes['userName']);
      localStorage.setItem('userRole',parsedJsonRes['userRole']);    
      return parsedJsonRes['token'];
  }

  login() {
    // logic
    if(localStorage.getItem('userName')==null){
      localStorage.setItem('loggedIn', 'true');
    this.isLoggedIn$.next(true);
    }
    // }else{
    //   localStorage.setItem('loggedIn', 'false');
    // this.isLoggedIn$.next(false);
    // }
  }

  logout() {
    // logic 
    if(localStorage.getItem('userName')!=null){
      localStorage.setItem('loggedIn', 'false');
      this.isLoggedIn$.next(false);
    }
      // }else{
      //   localStorage.setItem('loggedIn', 'true');
      // this.isLoggedIn$.next(true);
      // }
    // localStorage.setItem('loggedIn', 'false');
    // this.isLoggedIn$.next(false);
  }

}
