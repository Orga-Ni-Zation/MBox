import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export interface Product{
  _id:string,
  name: String,
  imageUrl: String,
  description: String,
  category: Array<any>,
  price: Number,
  gender: Array<any>,
  priceCategory: Array<String>,
  updated_at:Date,
  created_at:Date

}


@Injectable()
export class ProductService {
  product: Product; // The current logged in user
    startLoginCompleted: boolean = false;
    BASE_URL: string=`${environment.BASE_URL}`;
    options: object = {withCredentials:true};
    productList: Array<object> = [];


    constructor(private http:Http) { }



    listProduct(){
      return this.http.get(`${this.BASE_URL}/product`, this.options)
        .map(res => res.json()
        )
        .catch(this.handleError)
    }

    listProductByCategory(category):Observable<Product>{
      return this.http.get(`${this.BASE_URL}/product/category/${category}/`, this.options)
        .map(res => {
          console.log(res.json())
          return res.json();
        })
        .catch(this.handleError)
    }

    createProduct(newProduct):Observable<Product>{
      return this.http.post(`${this.BASE_URL}/product/new`, newProduct, this.options)
        .map(res => {
          console.log('map después de la respuesta del post servicio Product =>')
          console.log(res.json())
        })
        .catch(this.handleError)
    }

    edit(formInfo,product){
    return this.http.put(`${this.BASE_URL}/product/${product._id}/edit`, formInfo ,this.options)
       .map((res) => res.json());
    }

    getProductById(id) {
     return this.http.get(`${this.BASE_URL}/product/${id}`,this.options)
       .map((res) => res.json());
   }

    // deleteProduct(formInfo,product){
    // return this.http.delete(`${this.BASE_URL}/product/${product._id}/delete`, formInfo ,this.options)
    //    .map((res) => res.json());
    // }
    handleError(e) {
      console.log('ERROR => ' + e)
      console.error("Error en la llamada al endpoint Product");
      return Observable.throw(e.json().message);
    }

  }
