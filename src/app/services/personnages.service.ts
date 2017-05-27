import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import {Personnage} from "app/model/personnage";
import {Recherche} from "app/model/recherche";
import 'rxjs';

@Injectable()
export class PersonnagesService {

  private page: number = 0;

  constructor(private http: Http) { }

  rechercherPersonnages(wantedPersonnage): Observable<Recherche> {
    return this.http.get("https://swapi.co/api/people/?search=" + wantedPersonnage)
    .map((response: Response) => {
      let people = response.json();
      console.log(people)
      let recherche = new Recherche();
      recherche.personnages = people["results"];
      return recherche
    })
  }

  rechercherTousPersonnages(page: number): Observable<Recherche> {
    this.page = page;
    return this.http.get("https://swapi.co/api/people/?page=" + page)
    .map((response: Response) => {
      let people = response.json();
      console.log(people)
      let recherche = new Recherche();
      recherche.personnages = people["results"];
      recherche.page = page;
      return recherche
    })
  }

}
