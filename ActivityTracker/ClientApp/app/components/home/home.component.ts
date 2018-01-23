import { Component } from '@angular/core';
import { ActivityModel } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    activity: ActivityModel = new ActivityModel();

    constructor(
        private activityService: ActivityService,
        private toastr: ToastsManager
    ) {

    }

    onSubmit() {
        this.toastr.success("Activity Subscription Submitted", "Insert Activity");
    }
}
