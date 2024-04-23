import { Component } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss', '../page.scss']
})
export class HomePageComponent extends PageComponent {
    
    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }

}
