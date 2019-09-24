import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../../../shared/post.service';
import { Post } from '../../../models/post';
import { CommonService } from '../../../shared/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/dialog.component';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

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

  @ViewChild('editPost', { static: false }) editBtn: ElementRef;

  constructor(public dialog: MatDialog, private PostService: PostService, private commonService: CommonService) {
    this.post = new Post();
    this.commonService.postEdit_Observable.subscribe(res => {
      this.editBtn.nativeElement.click();
    }
    )
  }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }

  getAllPost() {
    this.PostService.getAllPost().subscribe(result => {
      //console.log('result is ', result);
      this.posts = result['data'];
    });
  }

  editPost(post: Post) {
    this.commonService.setPostToEdit(post);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`${result}`);
      this.post = result;
    });

  }

}
