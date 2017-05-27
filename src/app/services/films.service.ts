import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import {Film} from "app/model/Film";
import {Recherche} from "app/model/recherche";
import 'rxjs';

@Injectable()
export class FilmsService {

  constructor(private http: Http) { }

  rechercherFilms(wantedFilm): Observable<Recherche> {
    return this.http.get(wantedFilm)
    .map((response: Response) => {
      let film = response.json();
      console.log(film)
      let recherche = new Recherche();
      recherche.films = film;
      return recherche
    })
  }

}
