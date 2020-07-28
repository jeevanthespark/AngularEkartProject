import { Component, OnInit } from '@angular/core';
import {Category} from './category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
  categories:Category[]=[
    {id:0,name:'All Categories'},
    {id:1,name:'Milk Chocolates'},
    {id:2,name:'Dark Chocolates'},
    {id:3,name:'Nuts'}];
  ngOnInit(): void {
  }

}
