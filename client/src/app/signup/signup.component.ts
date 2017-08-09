import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import {environment} from '../../environments/environment';
import $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string;
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASE_URL}/user/signup/`
  });
  formInfo = {
    username: '',
    password: '',
    lastName: '',
    email: '',
    gender: '',
    role: '',
    birthday: '',
    interests: [''],
    phone:'',
    address:'',
    country:'',
    }
    feedback: string;

  constructor(private session: SessionService, private router: Router) { }
  ngOnInit() {
    console.log('vamos a ver que llegue a aqui')
    console.log(this.uploader)
  //   this.uploader.onSuccessItem = (item, response) => {
  //   this.feedback = JSON.parse(response).message;
  //   console.log(this.feedback);
  //   this.router.navigate(['/']);
  // };
  //
  // this.uploader.onErrorItem = (item, response, status, headers) => {
  //   this.feedback = JSON.parse(response).message;
  // };

  }



  signup() {
    console.log('===> estás aqui???')
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', this.formInfo.username);
      form.append('password', this.formInfo.password);
      form.append('lastName', this.formInfo.lastName);
      form.append('email', this.formInfo.email);
      form.append('gender', this.formInfo.gender);
      form.append('address', this.formInfo.address);
      form.append('role', this.formInfo.role);
      form.append('birthday', this.formInfo.birthday);
      form.append('interests', this.formInfo.interests);
      form.append('phone', this.formInfo.phone);
      form.append('country', this.formInfo.country);
    };
    console.log('signup que si llegue :)')
    this.uploader.uploadAll();
    this.router.navigate(['/home'], this.formInfo );
  }

}
