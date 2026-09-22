import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { SharedImports } from 'src/app/shared/imports';

@Component({
    selector: 'jmp-idiomes',
    templateUrl: './idiomes.component.html',
    styleUrl: './idiomes.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        ...SharedImports,
    ]
})
export class IdiomesComponent {

    public m = inject(MainService);

}
