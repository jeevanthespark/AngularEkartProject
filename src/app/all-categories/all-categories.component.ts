import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ITEMS } from '../items-mock';
import { Observable, of } from 'rxjs';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AllCategoriesComponent implements OnInit {
  categoryId: number;
  items: Observable<Item[]>;
  initialItems: Item[];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const savedItems = this.cartService.getCartItems();
    if (savedItems && savedItems.length > 0) {
      this.initialItems = savedItems;
    } else {
      this.initialItems = ITEMS;
    }

    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get("id"));
      this.items = this.populateItems(this.categoryId);
    });
  }

  populateItems(id: number): Observable<Item[]> {
    if (id != 0) {
      return of(this.initialItems.filter(item => item.category === this.categoryId));
    } else {
      return of(this.initialItems);
    }
  }

  getItemGradient(category: number): string {
    switch (category) {
      case 1: return 'from-amber-400 via-orange-300 to-pink-300';
      case 2: return 'from-purple-900 via-fuchsia-800 to-pink-700';
      case 3: return 'from-yellow-500 via-amber-400 to-orange-400';
      default: return 'from-neon-purple via-hot-pink to-vivid-purple';
    }
  }

  getItemEmoji(category: number): string {
    switch (category) {
      case 1: return '🥛';
      case 2: return '🍫';
      case 3: return '🌰';
      default: return '🍫';
    }
  }

  // Check if item should show premium badge (randomly on 2-3 items)
  showPremiumBadge(itemId: number): boolean {
    // Show premium on items with id 1, 4, and 7 (you can change this logic)
    return [1, 4, 7].includes(itemId);
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
    this.cartService.updateCartItems(outputItems);
    return outputItems;
  }

  increaseQuantity(itemId: number) {
    this.items.subscribe(items => (this.items = of(this.changeQuantity(items, itemId, 1))));
  }

  decreaseQuantity(itemId: number) {
    this.items.subscribe(items => (this.items = of(this.changeQuantity(items, itemId, -1))));
  }
}
