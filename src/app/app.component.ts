import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, CategoriesComponent]
})
export class AppComponent implements OnInit {
  title = 'chocolate-factory';
  items: Item[];
  isSidebarOpen = false;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // Load cart items from service
    this.items = this.cartService.getCartItems();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
