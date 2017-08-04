import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  error: string;
  formInfo = {
    userId: {},
    recieve: '',
    address: '',
    delivery: Date,
  }
  constructor(private orders: OrdersService, private router: Router) { }

  ngOnInit() {
  }

  createBox(){
    this.orders.orderBox(this.formInfo)
      .subscribe(
        (user) => {
          console.log('la caja fue ordenada');
          this.router.navigate(['/home']);
        },
        (err) => this.error = err
      )
  }

  listBoxes(){
    this.orders.listBoxes()
  }
  return this.http.get(`${BASE_URL}/api/plate/${location}`, this.options)
      .map(res => res.json());
}
