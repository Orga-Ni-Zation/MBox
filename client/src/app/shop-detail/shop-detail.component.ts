import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  error: any;
  user: any;

  constructor(private session:SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( result => this.user=result);
  }

}
