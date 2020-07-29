import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  cartItems: Item[];
  filteredCartItems: Item[];
  totalPrice: number;
  displayedColumns: string[] = [
    "Product Name", "Quantity", "Price"
  ];
  constructor() { }

  ngOnInit(): void {
    try {
      let cookieItems = localStorage.getItem('cart-items');
      if (cookieItems.length > 0) {
        this.cartItems = JSON.parse(cookieItems);
      } else {
        this.cartItems = null;
      }
      this.filterCartItems(this.cartItems);
    } catch (e) {
      // console.error(e);
    }
  }
  filterCartItems(cartItems: Item[]) {
    this.filteredCartItems = cartItems.filter(item => item.quantity > 0);
    this.totalPrice = 0;
    this.filteredCartItems.forEach(item => {
      this.totalPrice = this.totalPrice + (item.price * item.quantity)
    });
  }
  updateCartItems(cartItems: Item[]) {
    localStorage.setItem('cart-items', JSON.stringify(cartItems));
  }
  changeQuantity(items: Item[], itemId: number, delta: number): Item[] {
    let outputItems: Item[] = items.map(item => {
      if (item.id === itemId) {
        if (!((delta === -1) && (item.quantity === 0))) {
          item.quantity = item.quantity + delta;
          // console.log("Quantity increased to " + item.quantity + " for " + item.id);
        }
      }
      return item;
    });
    this.filterCartItems(outputItems);
    this.updateCartItems(outputItems);
    return outputItems;
  }
  increaseQuantity(itemId: number) {
    this.changeQuantity(this.cartItems, itemId, 1);
  }
  decreaseQuantity(itemId: number) {
    this.changeQuantity(this.cartItems, itemId, -1);
  }
  clearCart() {
    this.filterCartItems=null;
    localStorage.removeItem('cart-items');
    // window.alert("Cart Items Cleared");
    window.location.reload()
  }
}
