import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { RouterModule, Routes, ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  error: string;
  formInfo = {
    status: '',
    }
    giftbox : any;
    giftboxId:any;
  constructor(
    private session: SessionService,
    private orders: OrdersService,
    private route: Router,
    private router: ActivatedRoute) {}

  ngOnInit() {
    this.session.isLoggedIn().subscribe( result => {
      this.successCb(result)
    });
  }

  editOrder(){
    this.giftbox = this.router.params.subscribe( params => {
      this.giftboxId=params['id']
    })
    this.orders.editBox(this.formInfo, this.giftboxId)
      .subscribe( result => console.log(result));
    this.route.navigate(['/orderslist']);
  }

  errorCb(err) {
    this.error = err;
    this.giftbox = null;
  }
  successCb(result) {
    this.giftbox = result;
    this.error = null;
  }
}
