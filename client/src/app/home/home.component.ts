import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {OrdersService} from '../../services/orders.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
error: any;
user: any;
giftBox:any;
userId:any;
allBoxesById: Observable<Array<object>>;

  constructor(private session: SessionService,private orders: OrdersService, private product: ProductService,private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( result => this.user=result);
    this.orders.listBoxes().subscribe( result => this.giftBox=result);
    console.log(this.orders)

    /*PARA SACAR LAS CAJAS DE CADA USUARIO*/

  
    // this.allBoxesById = this.orders.listBoxesByUserId(this.userId);
    //   console.log('se están imprimiendo las lista de usuario');
    //   console.log(this.allBoxesById)
    //   console.log('quuuuueueuueueeu saca aqui'+this.userId)
  }



  logout() {
    this.session.logout()
      .subscribe(
        (user) => console.log("Ha hecho logout --->" + user),
        (err) => this.error = err
      );
    this.router.navigate(['']);
  }


}
