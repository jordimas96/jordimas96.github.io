import { Component, OnInit } from '@angular/core';
import { MostrarAmbAnimacioDirective } from 'src/app/directives/mostrar-amb-animacio.directive';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-idiomes',
    templateUrl: './idiomes.component.html',
    styleUrls: ['./idiomes.component.scss'],
    standalone: true,
    imports: [
        MostrarAmbAnimacioDirective,
    ]
})
export class IdiomesComponent implements OnInit {

    constructor(public m: MainService) { }

    ngOnInit(): void {

        // Debug //
        if (this.m.debug) setTimeout(() => { $("img.es").attr("src", "assets/icons/flags/cat.svg") }, 0);

    }

}
