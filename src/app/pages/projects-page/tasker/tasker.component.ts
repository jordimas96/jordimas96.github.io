import { Component, inject, OnInit } from '@angular/core';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-tasker',
    templateUrl: './tasker.component.html',
    styleUrl: './tasker.component.scss',
    imports: [
        ...SharedImports,
        SkillComponent,
        StoryComponent,
    ]
})
export class TaskerComponent implements OnInit {

    public m = inject(MainService);

    Skills = Skills;

    ngOnInit() {
        document.querySelectorAll("#tasker video").forEach(e => (<HTMLVideoElement>e).play());
    }
}
