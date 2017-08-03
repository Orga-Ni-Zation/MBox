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
      console.log('1 ng on init')
      this.session.signup('new name')
      .subscribe(
        (user) => {
          console.log('2'+user);
          this.router.navigate(['/home']);
        },
        (err) => this.error = err
      );
  }}
