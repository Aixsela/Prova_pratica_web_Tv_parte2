import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../films.service';
import { Films } from '../models/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  films?: Films;

  constructor(public filmsService: FilmsService, private route: ActivatedRoute) { }
     
  ngOnInit(): void {  

    //Prendo il catalogo dei film
    this.filmsService.getFilms().subscribe(risposta => this.films = risposta);
  }

}
