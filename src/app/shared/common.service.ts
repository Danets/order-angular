import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    public postAdded_Observable = new Subject();

    constructor() {

    }

    notifyPostAddition() {
        this.postAdded_Observable.next();
    }

}