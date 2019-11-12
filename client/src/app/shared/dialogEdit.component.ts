import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Post } from '../models/post'
import { PostService } from './post.service';
import { CommonService } from './common.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialogEdit.component.html',
})
export class DialogEditComponent implements OnInit {
    post: Post
    form: FormGroup

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DialogEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Post,
        private postService: PostService,
        private commonService: CommonService
    ) {
        this.post = data;
    }

    ngOnInit() {
        this.form = this.fb.group({
            _id: this.post._id,
            title: this.post.title,
            description: this.post.description,
        })
    }

    cancelClick(): void {
        this.dialogRef.close();
    }

    editPost() {
        this.post = this.form.value

        if (this.post.title && this.post.description) {

            if (this.post._id) {
                this.postService.updatePost(this.post).subscribe(res => {
                    this.commonService.notifyPostAddition();
                    this.cancelClick();
                });
            } else {
                console.log('Post does not exist!!!');
            }

        } else {
            console.log('Title and Description are empty!!!');
        }

    }

}