import { Component } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-art-page',
    templateUrl: './art-page.component.html',
    styleUrls: ['./art-page.component.scss', '../page.scss']
})
export class ArtPageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }


}
