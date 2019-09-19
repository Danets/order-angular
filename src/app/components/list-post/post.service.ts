import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post';


@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }
    
    getAllPost(){
		return this.http.post('/api/post/getAllPost', {})
	}
}
