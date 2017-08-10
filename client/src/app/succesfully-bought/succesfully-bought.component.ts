import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-succesfully-bought',
  templateUrl: './succesfully-bought.component.html',
  styleUrls: ['./succesfully-bought.component.css']
})
export class SuccesfullyBoughtComponent implements OnInit {
error: any;
user: any;
  constructor(private session:SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( result => this.user=result);
  }

}
