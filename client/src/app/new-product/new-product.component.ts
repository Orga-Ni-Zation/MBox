import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ProductService } from '../../services/product.service'
import { RouterModule, Routes, Router } from '@angular/router';
import { FileUploader} from "ng2-file-upload";
import {environment} from '../../environments/environment';
import $ from 'jquery';



@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
     url: `${environment.BASE_URL}/product/new`
   });
error: string;
  formInfo= {
    name: '',
    description:'',
    category:'',
    gender:'',
    price:'',
    priceCategory:'',
  }
  feedback:string;


  constructor(
    private session: SessionService,
    private product: ProductService,
    private router: Router) { }

  ngOnInit() {
    // this.uploader.onSuccessItem = (item, response) => {
    //   this.feedback = JSON.parse(response).message;
    //   this.router.navigate(['/new']);
    //   };
    //   this.uploader.onErrorItem = (item, response, status, headers) => {
    //   this.feedback = JSON.parse(response).message;
    // };

  }

  addProduct() {
    console.log('===> estás aqui???')
    console.log(this.formInfo);
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.formInfo.name);
      form.append('category', this.formInfo.category);
      form.append('gender', this.formInfo.gender);
      form.append('price', this.formInfo.price);
      // form.append('priceCategory', this.formInfo.priceCategory);
    };
    this.uploader.uploadAll();
    this.router.navigate(['/product'], this.formInfo );
}

  listByCategory(){
    this.product.listProductByCategory(this.formInfo.category).subscribe( (category) => {
      console.log('buscando...')
    })
  }
}
