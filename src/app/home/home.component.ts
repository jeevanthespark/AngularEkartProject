import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit {
  title = 'Welcome to ChocoDreamz';

  featuredCategories = [
    {
      id: 1,
      icon: '🍫',
      title: 'Dark Delights',
      subtitle: 'Rich & Bold',
      description: 'Indulge in our premium dark chocolate collection',
      gradient: 'from-purple-900 to-indigo-900'
    },
    {
      id: 2,
      icon: '🥛',
      title: 'Milk Magic',
      subtitle: 'Smooth & Creamy',
      description: 'Experience the perfect balance of cocoa and cream',
      gradient: 'from-amber-700 to-orange-800'
    },
    {
      id: 3,
      icon: '🤍',
      title: 'White Wonder',
      subtitle: 'Pure & Elegant',
      description: 'Discover our finest white chocolate creations',
      gradient: 'from-pink-400 to-rose-500'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Keyboard navigation for featured categories
  navigateToCategory(categoryId: number): void {
    this.router.navigate(['/category', categoryId]);
  }
}
