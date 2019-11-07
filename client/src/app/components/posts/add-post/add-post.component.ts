import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../../../shared/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/dialog.component';
import { Post } from '../../../models/post'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  public post: Post

  // @ViewChild('editPost', { static: false }) editBtn: ElementRef;

  constructor(public dialog: MatDialog, private commonService: CommonService) {
    this.post = new Post();
  }

  ngOnInit() {}

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


