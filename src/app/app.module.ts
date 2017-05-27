import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { ListePersonnagesComponent } from './liste-personnages/liste-personnages.component';
import { PersonnagesService } from './services/personnages.service';
import { RecherchePersonnageComponent } from './recherche-personnage/recherche-personnage.component';
import { DetailsPersonnageComponent } from './details-personnage/details-personnage.component';
import { BirthdaybbyPipe } from './birthdaybby.pipe';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { FilmsService } from './services/films.service';
import { BarreErreurComponent } from './barre-erreur/barre-erreur.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {path: "liste", component: ListePersonnagesComponent},
  {path: "details/:name", component: DetailsPersonnageComponent},
  {path: "film/:film", component: DetailsFilmComponent},
  {path: "**", redirectTo: "/liste"}
];

@NgModule({
  declarations: [
    AppComponent,
    ListePersonnagesComponent,
    RecherchePersonnageComponent,
    DetailsPersonnageComponent,
    BirthdaybbyPipe,
    DetailsFilmComponent,
    BarreErreurComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PersonnagesService, FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
