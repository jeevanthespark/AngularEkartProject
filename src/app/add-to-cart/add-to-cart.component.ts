import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AddToCartComponent implements OnInit {
  cartItems: Item[];
  filteredCartItems: Item[];
  totalPrice: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.filterCartItems(this.cartItems);
  }

  filterCartItems(cartItems: Item[]) {
    if (!cartItems) {
      this.filteredCartItems = [];
      this.totalPrice = 0;
      return;
    }
    this.filteredCartItems = cartItems.filter(item => item.quantity > 0);
    this.totalPrice = 0;
    this.filteredCartItems.forEach(item => {
      this.totalPrice = this.totalPrice + (item.price * item.quantity)
    });
  }

  getGradient(category: number): string {
    switch (category) {
      case 1: return 'from-amber-400 via-orange-300 to-pink-300';
      case 2: return 'from-purple-900 via-fuchsia-800 to-pink-700';
      case 3: return 'from-yellow-500 via-amber-400 to-orange-400';
      default: return 'from-neon-purple via-hot-pink to-vivid-purple';
    }
  }

  getEmoji(category: number): string {
    switch (category) {
      case 1: return '🥛';
      case 2: return '🍫';
      case 3: return '🌰';
      default: return '🍫';
    }
  }

  updateCartItems(cartItems: Item[]) {
    this.cartService.updateCartItems(cartItems);
  }

  changeQuantity(items: Item[], itemId: number, delta: number): Item[] {
    let outputItems: Item[] = items.map(item => {
      if (item.id === itemId) {
        if (!((delta === -1) && (item.quantity === 0))) {
          item.quantity = item.quantity + delta;
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
    this.filteredCartItems = null;
    this.cartService.clearCart();
    window.location.reload()
  }
}
