import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-idiomes',
    templateUrl: './idiomes.component.html',
    styleUrl: './idiomes.component.scss',
    standalone: true,
    imports: [
        ...SharedImports,
    ]
})
export class IdiomesComponent implements OnInit {

    constructor(public m: MainService) { }

    ngOnInit(): void {

        // Debug //
        if (this.m.debug) setTimeout(() => { $("img.es").attr("src", "assets/icons/flags/cat.svg") }, 0);

    }

}
