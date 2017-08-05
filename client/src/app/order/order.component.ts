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
    console.log("creando caja");
    console.log(this.formInfo);
    this.orders.createBox(this.formInfo)
      .subscribe(
        (order) => {
          console.log('la caja fue ordenada');
          this.router.navigate(['/home']);
        },
        (err) => console.log(err)
      )
  }



}
