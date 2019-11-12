import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../../../shared/post.service';
import { Post } from '../../../models/post';
import { CommonService } from '../../../shared/common.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/dialog.component';
import { DialogEditComponent } from '../../../shared/dialogEdit.component';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  public posts: Post[];
  public post: Post

  @ViewChild('editBtn', { static: false }) editBtn: ElementRef;

  constructor(public dialog: MatDialog, private postService: PostService, private commonService: CommonService) {
    this.post = new Post();
  }

  ngOnInit() {
    this.getAllPost();

    this.commonService.$postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }

  getAllPost() {
    this.postService.getAllPost().subscribe(result => {
      this.posts = result['data'];
    });
  }

  editPost(post: Post) {
    this.commonService.setPostToEdit(post);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '250px'
    dialogConfig.data = {
      _id: post._id,
      title: post.title,
      description: post.description,
    }

    this.dialog.open(DialogEditComponent, dialogConfig);
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
    });

  }

  deletePost(post: Post) {
    this.postService.deletePost(post._id).subscribe(res => {
      this.getAllPost();
    })
  }

}
