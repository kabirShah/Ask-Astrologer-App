// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataUrl = 'assets/data/products.json'; // Path to JSON file

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProductById(id: number): Observable<Product> {
    return new Observable<Product>((observer) => {
      this.getProducts().subscribe(products => {
        const product = products.find(p => p.id === id);
        if (product) {
          observer.next(product);
        } else {
          observer.error('Product not found');
        }
        observer.complete();
      }, error => {
        observer.error(error);
      });
    });
  }
}
