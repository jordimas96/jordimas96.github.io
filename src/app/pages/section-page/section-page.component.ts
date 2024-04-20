import { Component } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-section-page',
    templateUrl: './section-page.component.html',
    styleUrls: ['./section-page.component.scss', '../page.scss']
})
export class SectionPageComponent extends PageComponent {

    public section: string;
    public optionBack: number = 0;
    public urlGoBack: string = "";

    override async ngOnInit() {
        super.ngOnInit();

        this.route.params.subscribe(params => {
            this.section = params['section'];
            
            if (["evora", "orange", "in2art", "matic", "indra", "nexxia"].includes(this.section))
                this.optionBack = 1;
            else if (["android", "mad-jumpgate", "github", "custom-roms", "tasker"].includes(this.section))
                this.optionBack = 2;
            else if (["icons", "amazfit"].includes(this.section))
                this.optionBack = 3;
            
            this.urlGoBack = "/" + ["", "experience", "projects", "art"][this.optionBack];
        });
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }

    getNameGoBack() {
        return [
            ["Inici", "Inicio", "Home"],
            ["Experiència", "Experiencia", "Experience"],
            ["Projectes", "Proyectos", "Projects"],
            ["Art", "Arte", "Art"],
        ][this.optionBack][this.m.idiomaIndex];
    }
}
