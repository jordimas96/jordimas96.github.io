import { Component } from '@angular/core';
import { LinkComponent } from 'src/app/components/link/link.component';
import { MostrarAmbAnimacioDirective } from "src/app/directives/mostrar-amb-animacio.directive";
import { MainService } from 'src/app/services/main.service';
import { AboutCardComponent } from './about-card/about-card.component';

@Component({
    selector: 'jmp-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [AboutCardComponent, LinkComponent, MostrarAmbAnimacioDirective]
})
export class AboutComponent {

    public linkPC = "https://youtu.be/d8kB5c2RFes?si=hCTqazUXXsSSBI_U&t=607";
    public linkMobil = "https://youtu.be/nY2EHO3zcnw?si=lPGMBrtPTtMKfywc&t=449";

    constructor(public m: MainService) { }
}
