import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { Film, Films} from '../models/film';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // film: Film[] = [];

  films?: Films;


  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe(risposta => this.films = risposta)
  }

}
