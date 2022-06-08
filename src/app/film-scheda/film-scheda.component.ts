import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../films.service';
import { Scheda, Trailer } from '../models/film';

@Component({
  selector: 'app-film-scheda',
  templateUrl: './film-scheda.component.html',
  styleUrls: ['./film-scheda.component.css']
})
export class FilmSchedaComponent implements OnInit {

scheda?: Scheda;

trailer?: Trailer;


  constructor(private filmService: FilmsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")!;
    
      this.filmService.getSchedaByFilmId(id).subscribe(risposta => this.scheda = risposta);

      this.filmService.getTrailerByfilmId(id).subscribe(risposta => this.trailer = risposta);
      // this.filmService.getActorList(name).subscribe(risposta => this.actorList = risposta);
    
  }

}
