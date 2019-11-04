import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Post } from '../models/post';
import * as moment  from 'moment';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    public postAdded_Observable = new Subject();
    public postEdit_Observable = new Subject();
    public post_has_been_edited;
    
    public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())

    constructor() {
        this.post_has_been_edited = new Post();
    }

    changeMonth(int: number) {
        const value = this.date.value.add(int, 'month')
        this.date.next(value)
    }

    changeDate(date: moment.Moment) {
        const value = this.date.value.set({
            date: date.date(),
            month: date.month()
        })
        this.date.next(value)
    }

    notifyPostAddition() {
        this.postAdded_Observable.next();
    }

    notifyPostEdit(){
		this.postEdit_Observable.next();
    }
    
    setPostToEdit(post: Post){
		this.post_has_been_edited = post;
		this.notifyPostEdit();
	}

}