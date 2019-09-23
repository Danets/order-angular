import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/post.service';
import { Post } from '../../../models/post';
import { CommonService } from '../../../shared/common.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  public posts: Post[];

  constructor(private PostService: PostService, private commonService: CommonService) { }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }

  getAllPost() {
    this.PostService.getAllPost().subscribe(result => {
      console.log('result is ', result);
      this.posts = result['data'];
    });
  }

}
