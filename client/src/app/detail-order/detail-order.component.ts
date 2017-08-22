import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes, Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { SessionService } from '../../services/session.service'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit {
  error: string;
  giftBox: {};
  idGiftBox: String;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private session: SessionService,
    private orders: OrdersService,
    private product: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id'] != null) {
        this.idGiftBox = params['id']
        console.log(this.idGiftBox)
        this.orders.detailBox(this.idGiftBox)
          .subscribe(
            giftBox => {
            this.giftBox = this.orders.giftsBox
          })
        }
    })
  }

}
