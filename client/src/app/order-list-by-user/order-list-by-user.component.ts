import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { RouterModule, Routes, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { OrdersService } from '../../services/orders.service';
import { ProductService } from '../../services/product.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-order-list-by-user',
  templateUrl: './order-list-by-user.component.html',
  styleUrls: ['./order-list-by-user.component.css']
})
export class OrderListByUserComponent implements OnInit {
  error: string;
  giftBoxesById:Observable<Array<object>>;
  user:any;

  constructor(private session: SessionService,
    private orders: OrdersService
  )  { }

  ngOnInit() {
    console.log(this.user);
    console.log(this.session);
    this.session.isLoggedIn().subscribe( result => this.user = result);


  }

  listUserBoxes(){
  this.giftBoxesById = this.orders.listBoxesByUserId(this.user._id);
}





}
