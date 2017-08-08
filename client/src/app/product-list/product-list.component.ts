import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service'
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
error: string;
  formInfo= {
    name: '',
    imageUrl: '',
    description:'',
    category:[''],
    gender:[''],
    price:'',
    priceCategory:'',

  }

  constructor(private session: SessionService,
    private product: ProductService,private router: Router) { }

  ngOnInit() {
  }

}
