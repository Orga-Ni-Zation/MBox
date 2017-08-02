import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
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
  }

  constructor(private session: SessionService) { }
  ngOnInit() {
  }

  signup() {
    this.session.signup(this.user)
      .subscribe(
        (user) => console.log(user),
        (err) => this.error = err
      );
  }

}
