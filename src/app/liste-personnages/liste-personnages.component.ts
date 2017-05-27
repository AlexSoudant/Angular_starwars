import { Component, OnInit } from '@angular/core';
import {PersonnagesService} from "app/services/personnages.service"
import {Personnage} from "../model/personnage"
@Component({
  selector: 'liste-personnages',
  templateUrl: './liste-personnages.component.html',
  styleUrls: ['./liste-personnages.component.css']
})
export class ListePersonnagesComponent implements OnInit {

  public recherche: String = "";
  public Personnages: Personnage[] = [];
  public error: String = "";
  public pageCourante: number = 1;

  constructor(private personSvc : PersonnagesService) { }

  ngOnInit() {
    this.personSvc.rechercherTousPersonnages(1)
    .subscribe((recherche) => {
      this.Personnages = recherche.personnages;
      console.log(this.Personnages);

    },
    (error) => {
      console.log(error);
    });
  };

  changerPage(numeroPage: number) {
    this.personSvc.rechercherTousPersonnages(numeroPage)
      .subscribe(
      ((recherche) => {
        this.pageCourante = recherche.page;
        this.Personnages = recherche.personnages;
      }),
      (error) => {
        console.log(error);
      });
  }

}
