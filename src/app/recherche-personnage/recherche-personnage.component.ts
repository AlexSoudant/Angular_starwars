import { Component, OnInit } from '@angular/core';
import {PersonnagesService} from "app/services/personnages.service"
import {Personnage} from "../model/personnage"
@Component({
  selector: 'recherche-personnage',
  templateUrl: './recherche-personnage.component.html',
  styleUrls: ['./recherche-personnage.component.css']
})
export class RecherchePersonnageComponent implements OnInit {
  public detailsClicked: boolean;
  public rechercheString: string = "";
  public Personnages: Personnage[] = [];
  public error: String = "";

  constructor(private personSvc: PersonnagesService) { }

    rechercher(personSvc : PersonnagesService) {
      this.detailsClicked = false;
      if (this.rechercheString === ""){
        console.log("recherche vide")
      }else{
      this.personSvc.rechercherPersonnages(this.rechercheString)
      .subscribe((liste) => {

        console.log('recherche effective sur : ', this.rechercheString)
        this.Personnages = liste.personnages;






          //this.filmDetails = this.getFilmFromList(this.listeFilms)
          //console.log("un film OU PAS:", this.filmDetails);

        },
      (error) => {
        console.log(error)
      })
      }
    }

    onclick(){
      this.detailsClicked = true;
    }

  ngOnInit() {

  }

}
