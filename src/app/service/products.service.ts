import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products')
      .pipe(
        take(1) // Opcional: Trate erros da requisição
      );
  }

  getProduct(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/products/'+id)
      .pipe(
        take(1) // Opcional: Trate erros da requisição
      );
  }

  createProduct( item : Product): Observable<any> {
    return this.httpClient.post<Product[]>('http://localhost:3000/products', JSON.stringify(item))
      .pipe(
        take(1) // Opcional: Trate erros da requisição
      );
  }
  updateProduct( item : Product): Observable<any> {
    return this.httpClient.put<Product[]>('http://localhost:3000/products', JSON.stringify(item))
      .pipe(
        take(1) // Opcional: Trate erros da requisição
      );
  }
  
}
