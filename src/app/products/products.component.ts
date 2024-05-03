import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }
  products : any[] = [];
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  addProduct(): void {
    this.router.navigate(['/new-product']);
  }

  viewProduct(product: Product): void {
    this.router.navigate(['/product-item', product.id], { queryParams: { product: JSON.stringify(product) }});
  }

}
