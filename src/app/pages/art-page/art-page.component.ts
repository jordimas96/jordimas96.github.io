import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';
import { AmazfitWatchfacesComponent } from './amazfit-watchfaces/amazfit-watchfaces.component';
import { IconsComponent } from './icons/icons.component';

@Component({
    selector: 'app-art-page',
    templateUrl: './art-page.component.html',
    styleUrl: './art-page.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
        IconsComponent,
        AmazfitWatchfacesComponent,
    ]
})
export class ArtPageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - Art";
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }


}
