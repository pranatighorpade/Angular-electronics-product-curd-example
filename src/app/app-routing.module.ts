import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';

const routes: Routes = [
  { path: '',  redirectTo: '/product',    pathMatch: 'full' },
  { path: 'product', component: ProductListComponent},
  { path: 'login',   component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/:productId/edit', component: ProductEditComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}