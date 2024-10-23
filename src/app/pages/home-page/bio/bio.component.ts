import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { Skills } from 'src/app/enums/skills.enum';
import { ExperienceCalculatorService } from 'src/app/services/experience-calculator.service';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MostrarAmbAnimacioDirective,
        TargetBlankDirective,
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

    async ngOnInit() {

        // Debug //
        if (this.m.debug) setTimeout(() => { $("img.es").attr("src", "assets/icons/flags/cat.svg") }, 0);

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

    getAnysExp() {
        let [anys, mesos] = this.exp.skills[Skills._TOTAL].anysMesosDies;
        if (mesos >= 6)
            anys++;

        return anys;
    }

    getRutaCV() {
        return `assets/documents/CV/CV Jordi Mas Parramon ${this.m.idioma.toUpperCase()}.pdf`;
    }

    
}
