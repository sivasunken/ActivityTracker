import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivityModel } from '../models/activity.model';

@Injectable()
export class ActivityService {
    apiUrl: string;
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.apiUrl = baseUrl + 'api/activities';
    }

    getActivityList(): Observable<ActivityModel[]> {
        return this.http.get(this.apiUrl)
            .map((res: Response) => res.json());
    }

    postActivity(activity: ActivityModel): Observable<string>{
        return this.http.post(this.apiUrl, activity)
            .map((res: Response) => res.json())
            .catch(error => Observable.throw(error || 'Server Error Occured'));
    }
}