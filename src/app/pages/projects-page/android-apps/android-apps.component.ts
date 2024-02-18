import { Component, ElementRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CardComponent } from '../../../components/card/card.component';

@Component({
    selector: 'app-android-apps',
    templateUrl: './android-apps.component.html',
    styleUrls: ['./android-apps.component.scss', '../projects-page.scss', '../../../components/card/card.scss']
})
export class AndroidAppsComponent extends CardComponent {

    constructor(
        public override m: MainService,
        public override rootElement: ElementRef,
    ) {
        super(m, rootElement);
    }
    
}
