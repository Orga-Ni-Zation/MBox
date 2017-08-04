import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

export interface User{
  _id:string,
  username:string,
  updated_at:Date,
  created_at:Date
}

@Injectable()
export class SessionService {
  user:User; // The current logged in user
  startLoginCompleted:boolean = false;
  BASE_URL:string=`${environment.BASE_URL}`;
  options:object = {withCredentials:true};

  constructor(private http: Http) {
    this.isLoggedIn().subscribe( (user:User) =>{
      console.log(`Welcome again user ${user.username}`)
      this.user = user;
      this.startLoginCompleted = true;
    }, e => this.startLoginCompleted = true);
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(newUser):Observable<User> {
    return this.http.post(`${this.BASE_URL}/user/signup`, {newUser}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(username:string, password:string):Observable<User> {
    console.log(username,password);
    return this.http.post(`${this.BASE_URL}/user/login`, {username,password}, this.options)
      .map(res => {
        this.user = res.json();
        return this.user;
      })
      .catch(this.handleError);
  }

  edit(formInfo,user):Observable<any> {
    console.log('paso 2');
    console.log(formInfo)
    console.log(user)
    console.log('URL', `${this.BASE_URL}/user/${user._id}/edit`);
    return this.http.put(`${this.BASE_URL}/user/${user._id}/edit`, formInfo ,this.options)
      .map(res => {
        console.log('Res', res);
        this.user = res.json();
        console.log(this.user);
        return this.user;
      })
      // .catch(this.handleError);
  }

  logout():Observable<object>{
console.log("hemos entrado 8================D")
    return this.http.post(`${this.BASE_URL}/user/logout`, this.options)
      .map(res => {
        this.user = undefined;
        res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn():Observable<User>{
    return this.http.get(`${this.BASE_URL}/user/loggedin`, this.options)
      .map(res => {
        this.user = res.json();
        return this.user;
      })
      .catch(this.handleError);
  }

  getPrivateData():Observable<object>{
    return this.http.get(`${this.BASE_URL}/user/private`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
