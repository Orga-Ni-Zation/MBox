import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { SessionService } from '../../services/session.service'
import { ProductService } from '../../services/product.service'


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  error: string;
  formInfo = {
    userId:'',
    //productID: [''],
    recieve: '',
    address: '',
  }
  user:any;


  constructor(private orders: OrdersService, private product : ProductService, private session: SessionService, private router: Router) { }

  ngOnInit() {
      this.session.isLoggedIn().subscribe( result => this.user=result)
  }

  createBox(){
    // console.log(this.formInfo.userId)
    this.formInfo.userId = this.user._id;
    console.log(this.formInfo.userId);

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
