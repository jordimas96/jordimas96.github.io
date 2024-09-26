import { Component, ElementRef } from '@angular/core';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.scss']
})
export class BioComponent {

    public salutacions = {
        "ca": ["Bon dia!", "Bona tarda!", "Bona nit!"],
        "es": ["¡Buenos días!", "¡Buenas tardes!", "¡Buenas noches!"],
        "en": ["Good morning!", "Good afternoon!", "Good evening!"],
    };

    public anysExp: number;
    

    constructor(
        public m: MainService,
        public rootElement: ElementRef,
        public exp: ExperienceCalculatorService
    ) {
    }

    async ngOnInit() {
        
        this.anysExp = this.exp.experienciaPerSkills["_total"].anysAprox;

        // Debug //
        if (this.m.debug) setTimeout(() => { $("img.es").css({ "filter": "grayscale(1) brightness(100)" }); }, 0);
    }


    
    getSalutacioSegonsHora() {
        let horaActual = new Date().getHours();
        let index: number;

        const primeraHoraMati = 5;
        const primeraHoraTarda = 15;
        const primeraHoraVespre = 19;

        if (horaActual >= primeraHoraMati && horaActual < primeraHoraTarda)
            index = 0;
        else if (horaActual >= primeraHoraTarda && horaActual < primeraHoraVespre)
            index = 1;
        else
            index = 2;
        
        return this.salutacions[this.m.idioma][index] || "Hey!";
    }

    getRutaCV() {
        return `assets/documents/CV/CV Jordi Mas Parramon ${this.m.idioma.toUpperCase()}.pdf`;
    }

    
}
