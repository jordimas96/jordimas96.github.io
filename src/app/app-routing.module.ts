import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "home/web",
        pathMatch: "full"
    },
    {
        path: "home/:area",
        component: HomePageComponent
    },
    {
        path: "experience/:area",
        component: ExperiencePageComponent
    },
    {
        path: "projects/:area",
        component: ProjectsPageComponent
    },
    {
        path: "**",
        redirectTo: "home/web"
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
