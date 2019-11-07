import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';

import { Subject } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class PostService {
    $postStream = new Subject<any>();

    constructor(private http: HttpClient) { }

    getAllPost() {
        return this.http.get<Post[]>('/api/post')
    }

    addPost(post: Post) {
        return this.http.post<Post>('/api/post',
            {
                title: post.title,
                description: post.description
            },
            httpOptions)
    }

    updatePost(post: Post) {
        return this.http.put('/api/post', {
            id: post._id,
            title: post.title,
            description: post.description
        })
    }

    deletePost(_id: string) {
        return this.http.post('/api/post/deletePost', {id: _id})
    }

}
