import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../films.service';
import { ActorList, Scheda, Trailer } from '../models/film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-film-scheda',
  templateUrl: './film-scheda.component.html',
  styleUrls: ['./film-scheda.component.css']
})
export class FilmSchedaComponent implements OnInit {

scheda?: Scheda;
actor?: ActorList;
trailer?: Trailer;


visibile = false;

  constructor
  (
    private filmService: FilmsService,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    ) {}    

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id")!;
    
      this.filmService.getSchedaByFilmId(id).subscribe(risposta => this.scheda = risposta);

      this.filmService.getTrailerByfilmId(id).subscribe(risposta => this.trailer = risposta);
    
  }

  guardaTrailer() {
    this.visibile = true;
  }

  chiudi() {
    this.visibile = false;
  }

  // urlTrailer(trailer: Trailer)  {
  //   this.trailer?.videoUrl =  this._sanitizer.bypassSecurityTrustResourceUrl(trailer.videoUrl);
  // }


}
