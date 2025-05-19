import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';
import { NexxiaComponent } from './2016-10-nexxia/nexxia.component';
import { TecnocomComponent } from './2017-09-tecnocom/tecnocom.component';
import { MaticComponent } from './2020-09-matic/matic.component';
import { In2artComponent } from './2021-08-in2art/in2art.component';
import { OrangeComponent } from './2023-08-orange/orange.component';
import { EvoraComponent } from './2023-11-evora/evora.component';
import { IndraComponent } from './2024-06-indra/indra.component';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrl: './experience-page.component.scss',
    imports: [
        ...SharedImports,
        RouterLink,
        NexxiaComponent,
        TecnocomComponent,
        MaticComponent,
        In2artComponent,
        OrangeComponent,
        EvoraComponent,
        IndraComponent,
    ]
})
export class ExperiencePageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();

        if (!this.m.debug) document.title = "Jordi Mas Parramon - Experience";
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }

}
