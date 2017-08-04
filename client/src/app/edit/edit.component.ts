import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  error: string;
  user: any;
  info = {
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
    this.session.isLoggedIn().subscribe( result => this.successCb(result));
  }
  edit(){
    this.session.edit(this.info, this.user);
    this.router.navigate(['/home']);
  }
  errorCb(err) {
    this.error = err;
    this.user = null;
  }
  successCb(result) {
    this.user = result;
    this.error = null;
  }
}
