import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-demos-in2art',
    templateUrl: './demos-in2art.component.html',
    styleUrl: './demos-in2art.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
    ]
})
export class DemosIn2artComponent {

    constructor(public m: MainService) { }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Deshabilitar control dels videos des de les tecles multimedia del teclat //
        // navigator.mediaSession.setActionHandler('play', function() { });
        // navigator.mediaSession.setActionHandler('pause', function() { });
    }

    afterRootFadeIn() { }



}
