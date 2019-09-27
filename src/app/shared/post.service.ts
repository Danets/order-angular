import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {
$postStream = new Subject<any>();

    constructor(private http: HttpClient) { }

    getAllPost() {
        return this.http.post('/api/post/getAllPost', {})
    }

    addPost(post: Post) {
        return this.http.post('/api/post/createPost', {
            title: post.title,
            description: post.description
        })
    }

    updatePost(post: Post){
		return this.http.post('/api/post/updatePost',{
			id: post._id,
			title : post.title,
			description : post.description
		})
    }
    
    deletePost(_id){
		return this.http.post('/api/post/deletePost',{id : _id})
	}

}
