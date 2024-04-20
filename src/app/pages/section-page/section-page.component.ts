import { Component } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-section-page',
    templateUrl: './section-page.component.html',
    styleUrls: ['./section-page.component.scss', '../page.scss']
})
export class SectionPageComponent extends PageComponent {

    public section: string;

    override async ngOnInit() {
        super.ngOnInit();

        // this.section = location.pathname.split("/section/")[1];
        this.route.params.subscribe(params => {
            this.section = params['section'];
        });
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }
}
