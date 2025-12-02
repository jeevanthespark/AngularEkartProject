import { Routes } from '@angular/router';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderNowComponent } from './order-now/order-now.component';

export const routes: Routes = [
    { path: 'category/:id', component: AllCategoriesComponent },
    { path: 'cart', component: AddToCartComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ordernow', component: OrderNowComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
