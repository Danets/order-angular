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
   tasks: Task[] = []
  // tasks$: Observable<Task[]>;
  taskForm: FormGroup;

  constructor(private commonService: CommonService, private taskrunnerService: TaskrunnerService) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl('', Validators.minLength(6))
    })
    this.onLoadTasks()
  }

  onLoadTasks() {
    // this.tasks$ = this.taskrunnerService.getAllTasks()
    //  this.taskrunnerService.getAllTasks().subscribe(tasks => this.tasks = tasks)
    this.commonService.date.pipe(
    //tap(value => console.log(value)),
    switchMap(value => {
      return this.taskrunnerService.getAllTasks(value)
    })
    ).subscribe(tasks => this.tasks = tasks)
  }

  createTask() {
    const {title} = this.taskForm.value

    const task: Task = {
      title,
      date: this.commonService.date.value.format('DD-MM-YYYY')
    }

    this.taskrunnerService.addTask(task).subscribe(res => {
      this.tasks.push(task)
      //this.onLoadTasks()
      this.taskForm.reset()
      console.log(res)
    }, err => console.error(err))
  }

  removeTask(task: Task) {
    this.taskrunnerService.deleteTask(task).subscribe(res => {
      this.tasks = this.tasks.filter(t => t._id !== task._id)
      //this.onLoadTasks()
    }, err => console.error(err))
  }

}
