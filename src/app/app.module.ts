// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductService } from './services/product.service';
import { CheckoutService } from './services/checkout.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    SearchProductComponent,
    ProductFormComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [ProductService, CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }