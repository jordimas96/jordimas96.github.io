import { Component } from '@angular/core';
import { LinkComponent } from 'src/app/components/link/link.component';
import { MostrarAmbAnimacioDirective } from "src/app/directives/mostrar-amb-animacio.directive";
import { MainService } from 'src/app/services/main.service';
import { AboutCardComponent } from './about-card/about-card.component';

@Component({
    selector: 'app-about-in2art',
    templateUrl: './about-in2art.component.html',
    styleUrl: './about-in2art.component.scss',
    imports: [AboutCardComponent, LinkComponent, MostrarAmbAnimacioDirective]
})
export class AboutIn2artComponent {

    public linkPC = "https://youtu.be/8K6HP2YXtyk?si=hCTqazUXXsSSBI_U&t=583";
    public linkMobil = "https://youtu.be/_VEn4PUaOVk?si=lPGMBrtPTtMKfywc&t=418";

    constructor(public m: MainService) { }
}
