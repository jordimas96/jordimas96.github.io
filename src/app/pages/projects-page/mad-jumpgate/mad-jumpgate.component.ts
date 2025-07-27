import { Component } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { MadJumpgateGameplayComponent } from './mad-jumpgate-gameplay/mad-jumpgate-gameplay.component';
import { MadJumpgateJocComponent } from './mad-jumpgate-joc/mad-jumpgate-joc.component';

@Component({
    selector: 'app-mad-jumpgate',
    templateUrl: './mad-jumpgate.component.html',
    styleUrl: './mad-jumpgate.component.scss',
    imports: [
        ...SharedImports,
        MadJumpgateJocComponent,
        MadJumpgateGameplayComponent,
        SkillComponent,
        StoryComponent,
    ]
})
export class MadJumpgateComponent {
    Skills = Skills;

    constructor(public m: MainService) { }

    textPlayInBrowser() { return ["Jugar al navegador", "Jugar en el navegador", "Play in browser"][this.m.idiomaIndex]; }
    textPlayInItchIo() { return ["Jugar a itch.io", "Jugar en itch.io", "Play on itch.io"][this.m.idiomaIndex]; }
    textDownloadForWindows() { return ["Descarregar per a Windows", "Descargar para Windows", "Download for Windows"][this.m.idiomaIndex]; }
    textGameplayOnYoutube() { return ["Gameplay a YouTube", "Gameplay en YouTube", "Gameplay on YouTube"][this.m.idiomaIndex]; }
}
