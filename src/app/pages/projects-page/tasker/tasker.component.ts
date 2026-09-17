import { Component, inject, Input, OnInit } from '@angular/core';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-tasker',
    templateUrl: './tasker.component.html',
    styleUrl: './tasker.component.scss',
    imports: [
        ...SharedImports,
        StoryComponent,
        LlistaSkills,
    ]
})
export class TaskerComponent implements OnInit {

    public m = inject(MainService);

    @Input() caseStudy!: CaseStudy;

    ngOnInit() {
        document.querySelectorAll("#tasker video").forEach(e => (<HTMLVideoElement>e).play());
    }
}
