import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
  }
  updateCartItems(cartItems: Item[]){
    this.cookieService.set('cart-items',JSON.stringify(cartItems),7);
  }
}
