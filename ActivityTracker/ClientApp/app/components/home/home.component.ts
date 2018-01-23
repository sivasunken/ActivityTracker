import { Component } from '@angular/core';
import { ActivityModel } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';
import { Router } from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    activity: ActivityModel = new ActivityModel();
    msg: string;
    errorType: string;

    constructor(
        private activityService: ActivityService,
        private router:Router
    ) {
    }

    onSubmit() {
        this.activityService.postActivity(this.activity).subscribe(resp => {
            this.errorType = 'success';
            this.msg = resp;
            setTimeout(() => {
                this.msg = null;
                this.router.navigate(['/fetch-data'])
            })
        }, error => {
            this.errorType = 'danger';
            this.msg = error;
        });
    }
}
