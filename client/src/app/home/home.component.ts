import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
error: any;
user: any;
toGetTheProductId:any;

  constructor(private session: SessionService, private product: ProductService,private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( result => this.user=result);
    // this.product.listProductByCategory({category: 'category'}).subscribe ( result => this.toGetTheProductId=result)
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
