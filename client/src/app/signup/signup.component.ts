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
  formInfo = {
    username: '',
    password: '',
    lastName: '',
    email: '',
    gender: '',
    birthday: '',
    country:'',
    address:'',
    phone:'',
    role:'',
    interest:[''],

  }

  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() {
  }



  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
        (user) => {
          console.log("el usuario es : "+user);
          this.router.navigate(['/home']);
        },
        (err) => this.error = err
      );
  }

}
