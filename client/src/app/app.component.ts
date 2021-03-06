import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  error : any;
  title = 'app';
  user:any;
  constructor(private router: Router, private session:SessionService){ }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( result => this.user=result);



  }
  logout(){
      this.session.logout()
        .subscribe(
          (user) => console.log("Ha hecho logout --->" + user),
          (err) => this.error = err
        );
      this.router.navigate(['']);
    }
}
