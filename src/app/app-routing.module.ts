import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: 'jordimas96',
        redirectTo: 'funciona96'
    },
    {
        path: 'jordimas',
        redirectTo: 'funcio'
    },
    {
        path: 'funciona',
        component: AppComponent
    },
    {
        path: 'funcio',
        component: AppComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
