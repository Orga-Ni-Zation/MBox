import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component'
import { IndexComponent } from './index/index.component';
import { OrderComponent } from './order/order.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { EditComponent } from './edit/edit.component'
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent},
  { path: 'order', component: OrderComponent},
  { path: 'shoplist', component: ShopListComponent},
  { path: 'shopdetails', component: ShopDetailComponent},
  { path: 'edit', component: EditComponent},
  { path: 'product', component: ProductListComponent}
]
