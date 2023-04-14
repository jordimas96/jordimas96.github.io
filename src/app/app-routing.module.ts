import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
    {
        path: 'experience',
        component: ExperiencePageComponent
    },
    {
        path: 'projects',
        component: ProjectsPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
