import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppbarComponent } from 'src/app/components/appbar/appbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { IndexComponent } from 'src/app/components/index/index.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        AppbarComponent,
        SidebarComponent,
        IndexComponent,
        RouterOutlet,
        FooterComponent,
    ]
})
export class AppComponent {
    title = 'Jordi Mas Parramon';

}
