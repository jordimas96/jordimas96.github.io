import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-icones-contacte',
    templateUrl: './icones-contacte.component.html',
    styleUrl: './icones-contacte.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
    ]
})
export class IconesContacteComponent {

    public m = inject(MainService);

}
