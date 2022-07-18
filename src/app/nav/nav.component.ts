import { style } from '@angular/animations';
import { Component,  OnInit, SimpleChanges } from '@angular/core';
import { FilmsService } from '../films.service';
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
    { path: "/contacts", name: "Contatti" }
  ];

  constructor(public filmsService: FilmsService) { }

  visualizzaRicerca = false;

  ngOnInit(): void {}


  //visualizzo o nascondo l'input di ricerca
  cerca(){
    this.visualizzaRicerca = ! this.visualizzaRicerca 
  }

 


 

  

}
