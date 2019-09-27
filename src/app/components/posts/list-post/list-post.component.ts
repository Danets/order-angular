import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../../../shared/post.service';
import { Post } from '../../../models/post';
import { CommonService } from '../../../shared/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/dialog.component';
import { DialogEditComponent } from '../../../shared/dialogEdit.component';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  public posts: Post[];
  public post: Post

  faTrash = faTrash;
  faEdit = faEdit;


  @ViewChild('editBtn', { static: false }) editBtn: ElementRef;

  constructor(public dialog: MatDialog, private postService: PostService, private commonService: CommonService) {
    //this.post = new Post();
    // this.commonService.postEdit_Observable.subscribe(res => {
    //   //this.editBtn.nativeElement.click();
    //   this.openDialog();
    // }
    // )
  }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });

    // this.commonService.postEdit_Observable.subscribe(res => {
    //   console.log('result is ', res);
    //   this.post = this.commonService.post_has_been_edited;
    // });
  }

  getAllPost() {
    this.postService.getAllPost().subscribe(result => {
      //console.log('result is ', result);
      this.posts = result['data'];
    });
  }

  editPost(post: Post) {
    console.log('Post is ', post);
    this.commonService.setPostToEdit(post);
    this.postService.$postStream.next(post);
    
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '250px',
      data: {
      _id: post._id,
      title: post.title,
      description: post.description,
    }
    });

    // dialogRef.afterClosed().pipe(
    //   switchMap((post) => post)
    // ).subscribe(result => {
    //   console.log(`${result}`);
    //   //this.post = result;
    // });
    dialogRef.afterOpened().pipe(
      switchMap(() => this.postService.$postStream )
      ).subscribe(res => {
      console.log(`${res}`);
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`${result}`);
      this.post = result;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`${result}`);
      this.post = result;
    });

  }

  deletePost(post: Post) {
    // console.log(post)
    // const id = post._id
    this.postService.deletePost(post._id).subscribe(res => {
      this.getAllPost();
    })
  }

}
