import { Component } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private checkoutService: CheckoutService) {}

  checkout(order: Order): void {
    this.checkoutService.processCheckout(order).subscribe(response => {
      console.log('Order processed successfully', response);
    }, error => {
      console.error('Error processing order', error);
    });
  }
}