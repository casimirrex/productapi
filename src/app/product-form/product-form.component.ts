import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEdit = false;
  productId: number | undefined;
  product: Product = new Product(0, '', '', 0, false, '', 0);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      numberOfItems: ['', Validators.required],
      inStock: [false, Validators.required],
      stockStatus: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productId = +id;
      this.isEdit = true;
      this.productService.getProduct(this.productId).subscribe((product: Product) => {
        this.product = product;
        this.productForm.patchValue(this.product);
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      if (this.isEdit && this.productId !== undefined) {
        this.productService.updateProduct(this.productId, this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
          error: (err) => {
            console.error('Error updating product:', err);
            // Handle error appropriately
          }
        });
      } else {
        this.productService.createProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
          error: (err) => {
            console.error('Error creating product:', err);
            // Handle error appropriately
          }
        });
      }
    }
  }
}
