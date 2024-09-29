import { Component } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { MainService } from 'src/app/services/main.service';


@Component({
    selector: 'app-alvea',
    templateUrl: './alvea.component.html',
    styleUrls: ['./alvea.component.scss', '../experience-page.scss']
})
export class AlveaComponent {
    Skills = Skills;

    public links = {
        ca: "https://alvea.es/",
        es: "https://alvea.es/",
        en: "https://alvea.es/",
    }

    constructor(public m: MainService) { }

    getLink() {
        return this.links[this.m.idioma];
    }

}
