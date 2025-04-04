import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedImports } from 'src/app/shared/imports';
import { PageComponent } from '../page.component';
import { NexxiaComponent } from './1 nexxia/nexxia.component';
import { TecnocomComponent } from './2 tecnocom/tecnocom.component';
import { MaticComponent } from './3 matic/matic.component';
import { In2artComponent } from './4 in2art/in2art.component';
import { OrangeComponent } from './5 orange/orange.component';
import { EvoraComponent } from './6 evora/evora.component';
import { IndraComponent } from './7 indra/indra.component';

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
