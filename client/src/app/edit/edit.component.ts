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
      this.successCb(this.session.user);
    }
    edit(){

      this.session.edit(this.user._id, this.info)
          .subscribe(
            (user) => this.successCb(user),
            (err) => this.errorCb(err)

          );
          this.router.navigate(['/home'])
    }
    errorCb(err) {
      this.error = err;
      this.user = null;
    }

    successCb(user) {
      this.user = user;
      this.error = null;
    }
  }
