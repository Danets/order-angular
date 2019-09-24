import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    public postAdded_Observable = new Subject();
    public postEdit_Observable = new Subject();
	public post_has_been_edited;

    constructor() {
        this.post_has_been_edited = new Post();
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