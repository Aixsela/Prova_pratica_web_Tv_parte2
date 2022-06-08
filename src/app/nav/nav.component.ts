import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menus: Menu[] = [
    { path: "", name: "Home" },
    { path: "/login", name: "Login" },
    { path: "/contatti", name: "Contatti" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
