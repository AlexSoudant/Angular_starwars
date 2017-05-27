import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FilmsService } from '../services/films.service';
import {Film} from "../model/film"


@Component({
  selector: 'details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {

  private sub: any;
  public filmUrl: string = "";
  public nameChar: string = "";
  public Films: Film[] = [];
  public error: String = "";
  
  constructor(private route : ActivatedRoute, private filmsSvc: FilmsService) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.filmUrl = params["film"];
        this.nameChar = params["name"];
        this.filmsSvc.rechercherFilms(this.filmUrl)
        .subscribe((liste) => {

          this.Films = liste.films;

          console.log(this.Films)


        },(error) => {
          console.log(error)
        })
      });
    }

}
