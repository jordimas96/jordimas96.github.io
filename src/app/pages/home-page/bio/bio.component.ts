import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.scss']
})
export class BioComponent extends CardComponent {

    public salutacions = {
        "ca": ["Bon dia!", "Bona tarda!", "Bona nit!"],
        "es": ["¡Buenos días!", "¡Buenas tardes!", "¡Buenas noches!"],
        "en": ["Good morning!", "Good afternoon!", "Good evening!"],
    };

    public anysExp;
    

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
    ) {
        super(m, rootElement);
    }

    override async ngOnInit() {
        super.ngOnInit();
        
        this.anysExp = this.m.exp.experienciaPerSkills["_total"].anysAprox;
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
