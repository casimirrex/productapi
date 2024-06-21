// src/app/product-list/product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
    console.log('ProductListComponent initialized');
  }

  ngOnInit(): void {
    console.log('ProductListComponent ngOnInit');
    this.productService.getProducts().subscribe(data => {
      console.log('Products fetched:', data);
      this.products = data;
    }, error => {
      console.error('Error fetching products', error);
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
      console.log(`Deleted product with ID: ${id}`);
    }, error => {
      console.error(`Error deleting product with ID: ${id}`, error);
    });
  }

  editProduct(id: number): void {
    this.router.navigate(['/product-form', id]);
  }
}