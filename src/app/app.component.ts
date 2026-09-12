import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppbarComponent } from 'src/app/components/appbar/appbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { IndexComponent } from 'src/app/components/index/index.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { LayoutService } from 'src/app/services/layout.service';
import { ScrollHapticsService } from 'src/app/services/scroll-haptics.service';

@Component({
    selector: 'jmp-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        AppbarComponent,
        SidebarComponent,
        IndexComponent,
        RouterOutlet,
        FooterComponent,
    ]
})
export class AppComponent {
    public ls = inject(LayoutService);
    scrollHaptics = inject(ScrollHapticsService);
    title = 'Jordi Mas Parramon';

    constructor() {
        window["ls"] = this.ls;
    }
}
