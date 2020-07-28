import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ITEMS } from '../items-mock';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  categoryId: number;
  items: Observable<Item[]>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get("id"));
      this.items= this.populateItems(this.categoryId);
    });
  }
  populateItems(id: number): Observable<Item[]> {
    if (id != 0) {
      return of(ITEMS.filter(item => item.category === this.categoryId));
    }
    else {
      return of(ITEMS);
    }
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
    return outputItems;
  }
  increaseQuantity(itemId: number) {
    this.items.subscribe(items=> (this.items=of(this.changeQuantity(items, itemId, 1))));
  }
  decreaseQuantity(itemId: number) {
    this.items.subscribe(items=> (this.items=of(this.changeQuantity(items, itemId, -1))));
  }
}
