import { Component, ElementRef } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { MainService } from './../../../services/main.service';

@Component({
    selector: 'app-other-projects',
    templateUrl: './other-projects.component.html',
    styleUrls: ['./other-projects.component.scss', '../projects-page.scss']
})
export class OtherProjectsComponent extends CardComponent {

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
    ) {
        super(m, rootElement);
    }
    
}
