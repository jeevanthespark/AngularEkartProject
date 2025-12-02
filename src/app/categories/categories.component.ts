import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [
    { id: 0, name: '✨ All Dreams' },
    { id: 1, name: '🥛 Velvet Milk' },
    { id: 2, name: '🍫 Noir Dreams' },
    { id: 3, name: '🌰 Nutty Bliss' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
