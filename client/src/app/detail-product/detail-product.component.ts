import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  error:any;
  product:any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private products: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.products.getProductById(params.id)
        .subscribe((product) => {
          console.log("component de productos: "+ product)
          console.log(product)
          this.product = product;
        });
    });
    console.log(this.product)
}

}
