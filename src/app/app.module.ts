import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCategoriesComponent,
    HeaderComponent,
    CategoriesComponent,
    AddToCartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookieService, AddToCartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
