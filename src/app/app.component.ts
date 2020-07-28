import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chocolate-factory';
  
  items: Item[];
  constructor(private cookieService: CookieService) { }
  ngOnInit() {
    try {
      let cookieItems = this.cookieService.get('cart-items');
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
