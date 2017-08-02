import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
    birthday: ''
  }

  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() {
  }



  signup() {
    this.session.signup(this.user)
      .subscribe(
        (user) => {
          console.log(user);
          this.router.navigate(['/index']);
        },
        (err) => this.error = err
      );
  }

}
