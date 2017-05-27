import { Component, OnInit } from '@angular/core';
import {PersonnagesService} from "app/services/personnages.service"
import {Personnage} from "../model/personnage"
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'details-personnage',
  templateUrl: './details-personnage.component.html',
  styleUrls: ['./details-personnage.component.css']
})
export class DetailsPersonnageComponent implements OnInit {

  private sub: any;
  public name: string = "";
  public personnageDetails: Object[] = [];
  public error: String = "";

  constructor(private route : ActivatedRoute, private personSvc: PersonnagesService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
    this.name = params['name'];
    this.personSvc.rechercherPersonnages(this.name)
    .subscribe((liste) => {

        this.personnageDetails = liste.personnages;

        //this.filmDetails = this.getFilmFromList(this.listeFilms)
        //console.log("un film OU PAS:", this.filmDetails);

      },(error) => {
        console.log(error)
      })


  });

  }

}
