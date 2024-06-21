import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  productId: number | undefined;
  product: Product | undefined;

  constructor(private productService: ProductService) {}

  searchProduct(): void {
    if (this.productId !== undefined) {
      this.productService.getProduct(this.productId).subscribe({
        next: (data: Product) => {
          this.product = data;
        },
        error: (error: any) => {
          console.error('Error fetching product', error);
          alert('Product not found');
        }
      });
    }
  }
}