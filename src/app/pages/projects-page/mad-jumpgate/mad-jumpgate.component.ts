import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';
import { MadJumpgateGameplayComponent } from './mad-jumpgate-gameplay/mad-jumpgate-gameplay.component';
import { MadJumpgateJocComponent } from './mad-jumpgate-joc/mad-jumpgate-joc.component';

@Component({
    selector: 'jmp-mad-jumpgate',
    templateUrl: './mad-jumpgate.component.html',
    styleUrl: './mad-jumpgate.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        MadJumpgateJocComponent,
        MadJumpgateGameplayComponent,
        StoryComponent,
        LlistaSkills,
    ]
})
export class MadJumpgateComponent {
    
    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    get textPlayInBrowser() { return ["Jugar al navegador", "Jugar en el navegador", "Play in browser"][this.m.idiomaIndex]; }
    get textPlayInItchIo() { return ["Jugar a itch.io", "Jugar en itch.io", "Play on itch.io"][this.m.idiomaIndex]; }
    get textDownloadForWindows() { return ["Descarregar per a Windows", "Descargar para Windows", "Download for Windows"][this.m.idiomaIndex]; }
    get textGameplayOnYoutube() { return ["Gameplay a YouTube", "Gameplay en YouTube", "Gameplay on YouTube"][this.m.idiomaIndex]; }
}
