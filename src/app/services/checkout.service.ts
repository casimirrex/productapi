import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  processCheckout(order: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/checkout`, order);
  }
}