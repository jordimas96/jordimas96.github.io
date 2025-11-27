import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMasonryComponent, NgxMasonryModule } from 'ngx-masonry';
import { SkillComponent } from 'src/app/components/skill/skill.component';
import { Skills } from 'src/app/enums/skills.enum';
import { StoryComponent } from 'src/app/pages/about-me-page/stories/story/story.component';
import { MainService } from 'src/app/services/main.service';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedImports } from 'src/app/shared/imports';
import { GitHubService } from './github.service';

@Component({
    selector: 'app-github-projects',
    templateUrl: './github-projects.component.html',
    styleUrl: './github-projects.component.scss',
    imports: [
        ...SharedImports,
        NgxMasonryModule,
        SkillComponent,
        MatProgressSpinnerModule,
        StoryComponent,
    ]
})
export class GithubProjectsComponent implements OnInit {
    Skills = Skills;

    @ViewChild("masonry") masonry: NgxMasonryComponent;

    public masonryReady = false;

    constructor(
        public m: MainService,
        public ts: ThemeService,
        public gs: GitHubService,
    ) { }

    async ngOnInit() {
        this.m.afterRootFadeIn(() => {
            this.gs.carregarInfoProjects();
        });
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
