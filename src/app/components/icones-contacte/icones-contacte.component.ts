import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-icones-contacte',
    templateUrl: './icones-contacte.component.html',
    styleUrl: './icones-contacte.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
    ]
})
export class IconesContacteComponent {

    constructor(public m: MainService) { }

}
