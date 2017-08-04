import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { OrdersService } from '../services/orders.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { OrderComponent } from './order/order.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { Router } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupComponent,
    HomeComponent,
    IndexComponent,
    OrderComponent,
    ShopDetailComponent,
    ProductListComponent,
    EditComponent,
    NewProductComponent,
    DetailProductComponent,
    EditProductComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [SessionService,OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
