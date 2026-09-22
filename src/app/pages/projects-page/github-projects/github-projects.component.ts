import { ChangeDetectionStrategy, Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMasonryComponent, NgxMasonryModule } from 'ngx-masonry';
import { LlistaSkills } from 'src/app/components/llista-skills/llista-skills';
import { CaseStudy } from 'src/app/data/case-studies.data';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';
import { GitHubService } from './github.service';

@Component({
    selector: 'jmp-github-projects',
    templateUrl: './github-projects.component.html',
    styleUrl: './github-projects.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
        NgxMasonryModule,
        MatProgressSpinnerModule,
        StoryComponent,
        LlistaSkills,
    ]
})
export class GithubProjectsComponent implements OnInit {
    
    public m = inject(MainService);
    public ts = inject(ThemeService);
    public gs = inject(GitHubService);
    
    @Input() caseStudy!: CaseStudy;

    @ViewChild("masonry") masonry: NgxMasonryComponent;

    public masonryReady = false;

    async ngOnInit() {
        this.gs.carregarInfoProjects();
    }


    onLayoutComplete() {
        setTimeout(() => {
            this.masonryReady = true;
        }, 300);
    }

    onImgLogoError(repo) {
        repo.iconUrl = repo.iconUrlBackup;
        repo.iconUrlBackup = null;
        this.masonry.layout();
    }

}
