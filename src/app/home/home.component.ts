import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title:string="Welcome to Bertha’s Deluxe Chocolates Factory";
  ngOnInit(): void {
  }

}
