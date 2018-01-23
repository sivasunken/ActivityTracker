import { Component } from '@angular/core';
import { ActivityModel } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    activityList: ActivityModel[] = [];

    constructor(private activityService: ActivityService) {
        this.getItems();
    }

    getItems() {
        this.activityService.getActivityList().subscribe(res => { this.activityList = res });
    }
}
