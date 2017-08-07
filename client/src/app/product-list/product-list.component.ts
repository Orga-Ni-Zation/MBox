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
    category:'',
    gender:'',
    price:'',
    priceCategory:'',

  }

  constructor(private session: SessionService,
    private product: ProductService,private router: Router) { }

  ngOnInit() {
  }
  addProduct() {
    console.log('Funcion addProduct dentro del componente =>')
    console.log(this.formInfo)
    this.product.createProduct(this.formInfo)
      .subscribe(
      (product) => {
        console.log('Producto creado => Entro en this.complaint componente crearProducto =>')
        console.log(this.product)
      },
      (err) => console.log(err)
      )
  }

  listByCategory(){
    this.product.listProductByCategory(this.formInfo.category).subscribe( (category) => {
      console.log('buscando...')
    })
  }
}
