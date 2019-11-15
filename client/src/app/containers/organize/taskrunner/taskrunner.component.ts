import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../../shared/common.service';
import { TaskrunnerService } from './taskrunner.service';
import { Task } from '../../../models/task';

import { Observable, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-taskrunner',
  templateUrl: './taskrunner.component.html',
  styleUrls: ['./taskrunner.component.scss']
})
export class TaskrunnerComponent implements OnInit {
  $tasks: Observable<Task[]>;
  taskForm: FormGroup;

  constructor(private commonService: CommonService, private taskrunnerService: TaskrunnerService) { }

  ngOnInit() {
    this.onLoadTasks()
    this.taskForm = new FormGroup({
      title: new FormControl('', Validators.minLength(6))
    })
  }

  onLoadTasks() {
    // this.$tasks = this.taskrunnerService.getAllTasks()
    this.$tasks = this.commonService.date.pipe(
    tap(value => console.log(value)),
    switchMap(value => this.taskrunnerService.getAllTasks(value))
    )
  }

  createTask() {
    const {title} = this.taskForm.value

    const task: Task = {
      title,
      date: this.commonService.date.value.format('YYYY-MMMM-DD')
    }

    this.taskrunnerService.addTask(task).subscribe(res => {
      this.taskForm.reset()
      this.onLoadTasks()
      console.log(res)
    }, err => console.error(err))
  }

  removeTask(task: Task) {
    this.taskrunnerService.deleteTask(task._id).subscribe(res => {
      this.onLoadTasks()
    }, err => console.error(err))
  }

}
