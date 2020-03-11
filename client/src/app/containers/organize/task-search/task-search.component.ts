import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.scss']
})
export class TaskSearchComponent implements OnInit {
  @Input() visible: boolean;
private searchTask = new Subject<string>()


  constructor() { }

  ngOnInit() {
  }

  search(value) {
    this.searchTask.next(value)
    console.log(value)
  }

}
