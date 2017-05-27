import { Personnage } from "app/model/Personnage";
import { Film } from "app/model/Film";

export class Recherche {
    personnages: Personnage[];
    films: Film[];
    pages: number;
    page: number;
}
