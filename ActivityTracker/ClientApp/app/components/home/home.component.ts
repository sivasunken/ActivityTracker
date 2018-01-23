import { Component} from '@angular/core';
import { ActivityModel } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    activity: ActivityModel = new ActivityModel();

    constructor(
        private activityService: ActivityService
    ) {
    }

    onSubmit() {
        
    }
}
