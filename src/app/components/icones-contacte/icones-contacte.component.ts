import { Component } from '@angular/core';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-icones-contacte',
    templateUrl: './icones-contacte.component.html',
    styleUrl: './icones-contacte.component.scss',
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective
    ]
})
export class IconesContacteComponent {

    constructor(public m: MainService) { }

}
