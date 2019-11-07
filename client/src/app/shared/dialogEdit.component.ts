import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../models/post'
import { PostService } from './post.service';
import { CommonService } from './common.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialogEdit.component.html',
})
export class DialogEditComponent implements OnInit {
    post: Post

    constructor(public dialogRef: MatDialogRef<DialogEditComponent>,
        private postService: PostService,
        private commonService: CommonService,
        @Inject(MAT_DIALOG_DATA) public data: Post) {
        this.post = new Post();
    }

    ngOnInit() {
        this.postService.$postStream.subscribe(res => {
            this.post = res;
            console.log(`It is mine: ${res}`);
        })    
    }

    cancelClick(): void {
        this.dialogRef.close();
    }

    editPost(post: Post) {

        if (this.post.title && this.post.description) {
            
            if (this.post._id) {
                this.postService.updatePost(this.post).subscribe(res => {
                    this.commonService.notifyPostAddition();
                    this.cancelClick();
                });
            } else {
                console.log('Fuck!!!');
            }

        } else {
            console.log('Title and Description are empty!!!');
        }

    }


}