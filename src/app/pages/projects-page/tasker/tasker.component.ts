import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
    selector: 'app-tasker',
    templateUrl: './tasker.component.html',
    styleUrls: ['./tasker.component.scss', '../projects-page.scss']
})
export class TaskerComponent {

    constructor(public m: MainService) { }
    
}
