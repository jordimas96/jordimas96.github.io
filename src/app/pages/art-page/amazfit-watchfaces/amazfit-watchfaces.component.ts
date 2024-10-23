import { Component } from '@angular/core';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { TargetBlankDirective } from 'src/app/directives/target-blank.directive';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-amazfit-watchfaces',
    templateUrl: './amazfit-watchfaces.component.html',
    styleUrls: ['./amazfit-watchfaces.component.scss', '../art-page.scss'],
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
        TargetBlankDirective,
    ]
})
export class AmazfitWatchfacesComponent {

    constructor(public m: MainService) { }
    
}
