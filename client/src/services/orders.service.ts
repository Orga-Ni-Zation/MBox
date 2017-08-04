import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Rx';

export interface GU{
  userId:string;
  productsID: Array<any>;
  recieve: string;
  delivery: Date;
  address: string;
}
@Injectable()
export class OrdersService {
  gu : GU;
  BASE_URL:string=`${environment.BASE_URL}`;
  options:object = {withCredentials:true};
  constructor( private http: Http ) { }

  orderBox(newBox){
    return this.http.post(`${this.BASE_URL}/new`, newBox, this.options)
    .map(res => res.json())
  }

  listBoxes(){
    return this.http.get(`${this.BASE_URL}`, this.options)
    .map(res => res.json());
  }

  detailBox(id){
    return this.http.get(`${this.BASE_URL}:id}`, this.options)
     .map(res => res.json());
  }

}
