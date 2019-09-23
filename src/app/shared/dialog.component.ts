import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../models/post'
import { PostService } from './post.service';
import { CommonService } from './common.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
})
export class DialogComponent {
    post: Post

    constructor(public dialogRef: MatDialogRef<DialogComponent>,
        private postService: PostService,
        private commonService: CommonService) {
        this.post = new Post();
    }

    cancelClick(): void {
        this.dialogRef.close();
    }

    addPost(post: Post) {

        if (this.post.title && this.post.description) {
            this.postService.addPost(this.post).subscribe(res => {
                this.commonService.notifyPostAddition();
                this.cancelClick();
            })
        } else {
            alert('Title and Description are empty!!!');
        }

    }


}