import { Component, inject } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { MadJumpgateGameplayComponent } from './mad-jumpgate-gameplay/mad-jumpgate-gameplay.component';
import { MadJumpgateJocComponent } from './mad-jumpgate-joc/mad-jumpgate-joc.component';

@Component({
    selector: 'jmp-mad-jumpgate',
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
    
    public m = inject(MainService);

    Skills = Skills;

    get textPlayInBrowser() { return ["Jugar al navegador", "Jugar en el navegador", "Play in browser"][this.m.idiomaIndex]; }
    get textPlayInItchIo() { return ["Jugar a itch.io", "Jugar en itch.io", "Play on itch.io"][this.m.idiomaIndex]; }
    get textDownloadForWindows() { return ["Descarregar per a Windows", "Descargar para Windows", "Download for Windows"][this.m.idiomaIndex]; }
    get textGameplayOnYoutube() { return ["Gameplay a YouTube", "Gameplay en YouTube", "Gameplay on YouTube"][this.m.idiomaIndex]; }
}
