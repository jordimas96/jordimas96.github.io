import { Component } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-section-page',
    templateUrl: './section-page.component.html',
    styleUrls: ['./section-page.component.scss', '../page.scss']
})
export class SectionPageComponent extends PageComponent {

    public section: string;
    public urlGoBack: string = "";

    override async ngOnInit() {
        super.ngOnInit();

        // this.section = location.pathname.split("/section/")[1];
        this.route.params.subscribe(params => {
            this.section = params['section'];
            
            if ("android" || "mad-jumpgate" || "github" || "custom-roms" || "tasker")
                this.urlGoBack = "projects";
            else if ("icons" || "amazfit")
                this.urlGoBack = "art";
            else if ("evora" || "orange" || "in2art" || "matic" || "indra" || "nexxia")
                this.urlGoBack = "experience";
            
        });
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }
}
