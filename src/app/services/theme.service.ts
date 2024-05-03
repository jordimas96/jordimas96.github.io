import { Injectable } from "@angular/core";
import { Utils } from "../shared/utils";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    
    public modeFosc: boolean = true;
    public tema: string = "";

    constructor() {
        
        this.setTemaSegonsHora();
        
        setTimeout(() => {
            this.actTema();
        }, 0);

        // Canviar tema cada 5 segons //
        // let i = 0; setInterval(() => { this.setTemaSegonsHora(i++ % 24); this.actTema(); }, 1000);
        
    }

    setTemaSegonsHora(horaActual = new Date().getHours()) {
        if (Utils.hasCookie("forçartema")) { this.tema = Utils.getCookie("forçartema"); return; }

        // this.tema = "matinada"; return;

        // Colors: matinada, matí, tarda, vespre, nit //
        const primeraHoraNit = 1;
        const primeraHoraMatinada = 6;
        const primeraHoraMati = 10;
        const primeraHoraTarda = 15;
        const primeraHoraVespre = 20;

        // |12345|6789|01234|56789|01230 //
        //   Nit  mtnd mati   trd  vesp //

        if (horaActual >= primeraHoraNit && horaActual < primeraHoraMatinada)
            this.tema = "nit";
        else if (horaActual >= primeraHoraMatinada && horaActual < primeraHoraMati)
            this.tema = "matinada";
        else if (horaActual >= primeraHoraMati && horaActual < primeraHoraTarda)
            this.tema = "mati";
        else if (horaActual >= primeraHoraTarda && horaActual < primeraHoraVespre)
            this.tema = "tarda";
        else
            this.tema = "vespre";


        const ara = new Date();
        const horaSeguent = new Date(ara.getFullYear(), ara.getMonth(), ara.getDate(), ara.getHours() + 1, 0, 0, 0);

        setTimeout(async () => {
            let temaVell = this.tema;
            this.setTemaSegonsHora(horaSeguent.getHours());

            $("*").css("transition", "color 1s, background-color 1s");
            this.actTema();
            await Utils.wait(1000);
            $("*").css("transition", "");

            if (temaVell != this.tema)
                console.log("Theme changed because it's " + (horaSeguent.getHours()) + ":00");
        }, horaSeguent.getTime() - ara.getTime());
    }

    actTema(tema?: string | number) {

        if (typeof (tema) == "string") this.tema = tema;
        if (typeof (tema) == "number") this.tema = ["matinada", "mati", "tarda", "vespre", "nit"][tema - 1];

        $("html")
            .removeClass("dark light").addClass(this.modeFosc ? "dark" : "light")
            .removeClass("nit matinada mati tarda vespre").addClass(this.tema);
    }

}
