import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component'
import { IndexComponent } from './index/index.component';
import { OrderComponent } from './order/order.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { EditComponent } from './edit/edit.component'
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderListComponent } from './order-list/order-list.component';
import { DetailOrderComponent } from './detail-order/detail-order.component';
import { SuccesfullyBoughtComponent } from './succesfully-bought/succesfully-bought.component';
import { OrderListByUserComponent } from './order-list-by-user/order-list-by-user.component'
import { PayComponent } from './pay/pay.component'
import { EditOrderComponent } from './edit-order/edit-order.component'

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'edit', component: EditComponent },
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'success', component: SuccesfullyBoughtComponent},
  { path: 'created', component: ShopDetailComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'new', component: NewProductComponent },
  { path: 'product/:id', component: DetailProductComponent },
  { path: 'editproduct', component: EditProductComponent },
  { path: 'orderslist', component: OrderListComponent },
  { path: 'orderdetail/:id', component: DetailOrderComponent },
  { path: 'orderlistbyuser/:id', component: OrderListByUserComponent },
  { path: 'editorder/:id', component: EditOrderComponent},
  { path: 'pay', component: PayComponent },
  { path: '**', redirectTo: '' }
]
