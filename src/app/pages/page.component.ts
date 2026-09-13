import { Component, inject } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    template: '',
    styleUrl: './page.scss',
    standalone: false
})
export class PageComponent {

    public m = inject(MainService);

    async ngOnInit() {

        // Google Analytics //
        if (!Utils.getFlag("googleAnalyticsBlocked"))
            this.m.gas.pageView(window.location.pathname);
    }


}
