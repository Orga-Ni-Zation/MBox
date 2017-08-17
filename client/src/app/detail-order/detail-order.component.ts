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
  giftBox: any;
  idGiftBox: String
  formInfo = {
    status: '',
    }
    giftbox : any;
    giftboxId:any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private session: SessionService,
    private orders: OrdersService,
    private product: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id'] != null) {
        this.idGiftBox = params['id']
        this.orders.detailBox(this.idGiftBox)
          .subscribe(
            giftBox => {
            this.giftBox = this.orders.giftsBox
          })
        }
    })
    this.session.isLoggedIn().subscribe( result => {
      this.successCb(result)
    });
  }

  editOrder(){
    this.giftbox = this.route.params.subscribe( params => {
      this.giftboxId=params['id']
    })
    this.orders.editBox(this.formInfo, this.giftboxId)
      .subscribe( result => console.log(result));
    this.router.navigate(['/orderslist']);
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
