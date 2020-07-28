import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCategoriesComponent} from './all-categories/all-categories.component';

const routes: Routes = [
  {path:'category/:id',component:AllCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
