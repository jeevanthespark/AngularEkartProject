import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chocolate-factory';
  
  items: Item[];
  constructor() { }
  ngOnInit() {
    try {
      let cookieItems = localStorage.getItem('cart-items');
      if (cookieItems.length > 0) {
        this.items = JSON.parse(cookieItems);
      } else {
        this.items = null;
      }
    }catch(e){
      // console.error(e);
    }

  }
}
