import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  error: string;
  allBoxes: Observable<Array<object>>;
  user:any;

  constructor(
    private orders: OrdersService,
    private session: SessionService) {}

  ngOnInit() {
    console.log(this.user);
    this.session.isLoggedIn().subscribe( result => this.user = result);
    this.allBoxes = this.orders.listBoxes();
      console.log('se están imprimiendo las ordenes de giftbox');
      console.log(this.allBoxes)
  }

  listBoxes(){

  }
}
