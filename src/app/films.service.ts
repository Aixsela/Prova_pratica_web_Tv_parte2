import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Films, Scheda, Trailer } from './models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  titolo: string = "";

  
  constructor(private http: HttpClient) { }

  getFilms(): Observable<Films> {
    // return this.http.get<Films>("https://imdb-api.com/en/API/MostPopularMovies/k_9v017wai")
    return this.http.get<Films>("http://localhost:4200/assets/film.json")
      .pipe(
        catchError(this.handleError<Films>("getFilms"))
      )
  };
  
  getSchedaByFilmId(id: string): Observable<Scheda> {
    // return this.http.get<Scheda>("https://imdb-api.com/it/API/Title/k_9v017wai/" + id)
    return this.http.get<Scheda>("http://localhost:4200/assets/film_detail.json/")
      .pipe(
        catchError(this.handleError<Scheda>("getSchedaByFilmId"))
      )
  }

  getTrailerByfilmId(id: string): Observable<Trailer> {
    // return this.http.get<Trailer>("https://imdb-api.com/it/API/YouTubeTrailer/k_9v017wai/" + id)
    return this.http.get<Trailer>("http://localhost:4200/assets/trailer.json/")
      .pipe(
        catchError(this.handleError<Trailer>("getTrailerByFilmId"))
      )
  }


  

  

  

 







  //funzione gestione errore
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation);
      console.log(error);

      return of(result as T);
    }
  }
}
