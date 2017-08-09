import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service'
import { RouterModule, Routes, Router } from '@angular/router';
import { FileUploader} from "ng2-file-upload";
import {environment} from '../../environments/environment';



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
     url: `${environment.BASE_URL}/api/Product`
   });
error: string;
  formInfo= {
    name: '',
    imageUrl: '',
    description:'',
    category:'',
    gender:'',
    price:'',
    priceCategory:'',
    specs: []
  }
  feedback:string;


  constructor(private session: SessionService,
    private product: ProductService,private router: Router) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
      this.router.navigate(['/new']);
      };
      this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

  }

  addSpec(valor){
    this.formInfo.specs.push(valor);
  }

  submit(){
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.formInfo.name);
      form.append('specs', JSON.stringify(this.formInfo.specs));
    };

   this.uploader.uploadAll();
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
