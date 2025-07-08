import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconesContacteComponent } from 'src/app/components/icones-contacte/icones-contacte.component';
import { Skills } from 'src/app/enums/skills.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrl: './bio.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
        IconesContacteComponent,
    ]
})
export class BioComponent {
    Skills = Skills;

    public salutacions = {
        "ca": ["Bon dia!", "Bona tarda!", "Bona nit!"],
        "es": ["¡Buenos días!", "¡Buenas tardes!", "¡Buenas noches!"],
        "en": ["Good morning!", "Good afternoon!", "Good evening!"],
    };

    constructor(
        public m: MainService,
        public rootElement: ElementRef,
        public exp: ExperienceCalculatorService
    ) { }

    async ngOnInit() { }



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

    getAnysExp() {
        let [anys, mesos] = this.exp.skills[Skills._TOTAL].anysMesosDies;
        if (mesos >= 6)
            anys++;

        return anys;
    }


}
