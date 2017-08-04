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

export const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'edit', component: EditComponent},
  { path: 'home', component: HomeComponent,
        children: [
          { path: 'order', component: OrderComponent},
          { path: 'shopdetails', component: ShopDetailComponent},
        ]
      },

  { path: 'product', component: ProductListComponent,
    children: [
      { path: 'new', component: NewProductComponent},
      { path: 'detail', component: DetailProductComponent},
      { path: 'edit', component: EditProductComponent},
  ]}
]
