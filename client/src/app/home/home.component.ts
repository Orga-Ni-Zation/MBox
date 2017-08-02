import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
error: any;
  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.session.logout()
      .subscribe(
        (user) => console.log("Ha hecho logout --->" + user),
        (err) => this.error = err
      );
    this.router.navigate(['']);
  }

}
