import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, },
  { path: 'product-item/:id', component: ProductItemComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
