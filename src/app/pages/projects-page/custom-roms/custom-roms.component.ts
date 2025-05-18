import { Component } from '@angular/core';
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
export class CustomRomsComponent {
    Skills = Skills;

    constructor(public m: MainService) { }
    
}
