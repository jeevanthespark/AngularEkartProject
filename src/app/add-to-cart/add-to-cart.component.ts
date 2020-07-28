import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {CartItem} from '../add-to-cart/cartitem';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getItemsFromCart(){

  }
}
