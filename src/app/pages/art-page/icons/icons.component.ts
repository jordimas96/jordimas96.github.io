import { Component } from '@angular/core';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrl: './icons.component.scss',
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
        TargetBlankDirective,
    ]
})
export class IconsComponent {

    constructor(public m: MainService) { }
    
}
