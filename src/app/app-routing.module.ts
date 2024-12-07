import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from 'src/app/pages/about-me-page/about-me-page.component';
import { ArtPageComponent } from 'src/app/pages/art-page/art-page.component';
import { ExperiencePageComponent } from 'src/app/pages/experience-page/experience-page.component';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { ProjectsPageComponent } from 'src/app/pages/projects-page/projects-page.component';
import { SectionPageComponent } from 'src/app/pages/section-page/section-page.component';

const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "about-me",
        component: AboutMePageComponent
    },
    {
        path: "experience",
        component: ExperiencePageComponent
    },
    {
        path: "projects",
        component: ProjectsPageComponent
    },
    {
        path: "art",
        component: ArtPageComponent
    },
    {
        path: "section/:section",
        component: SectionPageComponent
    },
    {
        path: "**",
        redirectTo: ""
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
