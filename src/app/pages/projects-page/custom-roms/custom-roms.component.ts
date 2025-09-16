import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/enums/skills.enum';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'app-custom-roms',
    templateUrl: './custom-roms.component.html',
    styleUrl: './custom-roms.component.scss',
    imports: [
        ...SharedImports,
        StoryComponent,
    ]
})
export class CustomRomsComponent implements OnInit {
    Skills = Skills;

    constructor(public m: MainService) { }

    ngOnInit() {
        // Posa fons segons la imatge //
        document.querySelectorAll(".mobil > img").forEach((img) => {
            let src: any = img.getAttribute("src");
            let mobil: any = img.closest(".mobil");
            src = src?.replace(/mobils\/(.*)\.png$/, "mobils/fons/$1-fons.png");
            mobil.style.setProperty('--fons', `url(${src})`);
        });
    }
    
}
