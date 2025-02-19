import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-amazfit-watchfaces',
    templateUrl: './amazfit-watchfaces.component.html',
    styleUrl: './amazfit-watchfaces.component.scss',
    imports: [
        ...SharedImports,
    ]
})
export class AmazfitWatchfacesComponent {

    constructor(public m: MainService) { }
    
}
