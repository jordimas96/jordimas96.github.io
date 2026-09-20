import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from 'src/app/pages/about-me-page/about-me.page';
import { ArtPageComponent } from 'src/app/pages/art-page/art.page';
import { ExperiencePageComponent } from 'src/app/pages/experience-page/experience.page';
import { HomePageComponent } from 'src/app/pages/home-page/home.page';
import { ProjectsPageComponent } from 'src/app/pages/projects-page/projects.page';
import { SearchPageComponent } from 'src/app/pages/search-page/search.page';
import { SectionPageComponent } from 'src/app/pages/section-page/section.page';
import { CaseStudyPageComponent } from './pages/case-study-page/case-study.page';
import { RedirectComponent } from './shared/redirect.component';

const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },

    // Seccions //
    { path: "home",          redirectTo: "" },
    { path: "experience",    component: ExperiencePageComponent },
    { path: "projects",      component: ProjectsPageComponent },
    { path: "art",           component: ArtPageComponent },
    { path: "about-me",      component: AboutMePageComponent },
    { path: "search",        component: SearchPageComponent },
    { path: "search/:query", component: SearchPageComponent },

    // Case studies //
    { path: "experience/:case-study", component: CaseStudyPageComponent, data: { pagina: "experience" } },
    { path:   "projects/:case-study", component: CaseStudyPageComponent, data: { pagina: "projects" } },
    { path:        "art/:case-study", component: CaseStudyPageComponent, data: { pagina: "art" } },

    // Section (no utilitzat) //
    { path: "section/:section", component: SectionPageComponent },
    
    // Fallback general //
    {
        path: "**",
        component: RedirectComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
