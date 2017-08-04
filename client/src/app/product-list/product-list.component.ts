import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  newProduct: Object = {
    user: this.session.user._id,
    status: 'sent',
    date: new Date(),
    hour: new Date()
  }

  constructor(private session: SessionService,
    private product: ProductService) { }

  ngOnInit() {
  }
  addProduct() {
    console.log('Funcion addProduct dentro del componente =>')
    console.log(this.newProduct)
    this.product.createProduct(this.newProduct)
      .subscribe(
      (product) => {
        console.log('Denuncia creada => Entro en this.complaint componente crearProducto =>')
        console.log(this.product)
      },
      (err) => console.log(err)
      )
  }
}
