import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service'
import { RouterModule, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
error: string;
  allProducts: Observable<Array<object>>;
  user:any;

  constructor(
    private session: SessionService,
    private product: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( result => this.user = result);
    this.product.listProduct().subscribe(result => this.allProducts=result)
    
  }

}
