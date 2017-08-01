import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  error: string;
  user = {
    username: '',
    password: '',
    name: '',
    lastName: '',
    email: '',
    gender: '',
    menbership: '',
    role: '',
    birthday: '',
  }

  constructor(private session: SessionService) { }
  ngOnInit() {
  }

  login() {
    this.session.login(this.user.username,this.user.password)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }

  fbLogin(){
    this.session.fblogin()
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }

  signup() {
    this.session.signup(this.user)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }

}
