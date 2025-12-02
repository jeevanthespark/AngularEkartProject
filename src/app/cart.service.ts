import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private readonly CART_STORAGE_KEY = 'cart-items';
    private cartItems$ = new BehaviorSubject<Item[]>([]);

    constructor() {
        // Initialize with current cart items
        const items = this.getCartItems();
        this.cartItems$.next(items);
    }

    getCartItems(): Item[] {
        try {
            const cartItems = localStorage.getItem(this.CART_STORAGE_KEY);
            if (cartItems && cartItems.length > 0) {
                return JSON.parse(cartItems);
            }
        } catch (e) {
            console.error('Error loading cart:', e);
        }
        return [];
    }

    // Observable for real-time cart updates
    getCartItems$(): Observable<Item[]> {
        return this.cartItems$.asObservable();
    }

    updateCartItems(items: Item[]): void {
        localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(items));
        // Notify all subscribers of the change
        this.cartItems$.next(items);
    }

    clearCart(): void {
        localStorage.removeItem(this.CART_STORAGE_KEY);
        // Notify all subscribers
        this.cartItems$.next([]);
    }
}
