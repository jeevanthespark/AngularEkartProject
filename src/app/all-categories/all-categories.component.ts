import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ITEMS } from '../items-mock';
import { Observable,of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {CartItem} from '../add-to-cart/cartitem';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  categoryId: number;
  items: Observable<Item[]>;
  cartItems:CartItem[];
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.items=this.route.paramMap.pipe(
      switchMap(params => {
        this.categoryId = Number(params.get("id"));
        return this.populateItems(this.categoryId);
      })
    );    
  }
  populateItems(id: number) : Observable<Item[]>{
    if (id != 0) {
      return of(ITEMS.filter(item => item.category === this.categoryId));
    }
    else {
      return of(ITEMS);
    }
  }
  
  increaseQuantity(item:Item){

  }
  decreaseQuantity(item:Item){

  }
}
