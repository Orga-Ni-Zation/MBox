import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service'
import { RouterModule, Routes, Router } from '@angular/router';
import $ from 'jquery'
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
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
        console.log('Producto creado => Entro en this.product componente crearProducto =>')
        console.log(this.product)
        this.router.navigate(['/']);
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
