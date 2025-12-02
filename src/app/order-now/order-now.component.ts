import { Component, OnInit } from '@angular/core';
import { BillingInfo } from './billinginfo';
import { ShippingInfo } from './shippinginfo';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class OrderNowComponent implements OnInit {
  billingInfo = new BillingInfo();
  shippingInfo = new ShippingInfo();
  cardtypes = ['VISA', 'MasterCard', 'Rupay'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    window.alert("Order Placed Successfully! 🎉");
    localStorage.removeItem('cart-items');
    this.router.navigate(['/home']);
  }
}
