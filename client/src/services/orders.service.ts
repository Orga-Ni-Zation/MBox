import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Rx';

export interface GU{
  // _id:string;
  userId: {};
  productsID: Array<any>;
  recieve: string;
  address: string;
}

@Injectable()
export class OrdersService {
  gu : GU;
  BASE_URL:string=`${environment.BASE_URL}`;
  options:object = {withCredentials:true};
  guList : Array<object> = [];
  giftsBox: GU;

  constructor( private http: Http ) { }

  createBox(newBox): Observable<GU>{
    console.log('mandando la petición a giftbox/new')
    return this.http.post(`${this.BASE_URL}/giftbox/new`, newBox, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

  editBox(formInfo, order){
    return this.http.put(`${this.BASE_URL}/giftbox/${order}/edit`, formInfo, this.options)
    .map(res => {
      console.log('map despues de la respuesta del PUT servicio order');
      console.log(res.json())
    })
    .catch(this.handleError);
  }

  listBoxes(){
    return this.http.get(`${this.BASE_URL}/giftbox`, this.options)
    .map(res => res.json()
  )
    .catch(this.handleError);
  }

  listBoxesByUserId(userId){

    return this.http.get(`${this.BASE_URL}/giftbox/user/${userId}`, this.options)
    .map(res => res.json()
  )
    .catch(this.handleError);
  }

  detailBox(id){
    return this.http.get(`${this.BASE_URL}/giftbox/${id}`, this.options)
     .map(res => res.json());
  }

  

  handleError(e) {
    console.log('Errrrrooooorrr =>' + e);
    console.log('Error en la llamada al endpoint Order');
    return Observable.throw(e.json().message);
  }
}
