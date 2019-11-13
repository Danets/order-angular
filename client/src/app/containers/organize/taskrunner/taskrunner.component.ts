import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../../shared/common.service';
import {TaskrunnerService}  from './taskrunner.service';
import {Task}  from '../../../models/task';

@Component({
  selector: 'app-taskrunner',
  templateUrl: './taskrunner.component.html',
  styleUrls: ['./taskrunner.component.scss']
})
export class TaskrunnerComponent implements OnInit {
  tasks: Task[]
  taskForm: FormGroup

  constructor(private commonService: CommonService, private taskrunnerService: TaskrunnerService) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl('', Validators.minLength(6))
    })
    this.onLoadTasks()
  }

  onLoadTasks() {
    this.taskrunnerService.getAllTasks().subscribe(res => {
      this.tasks = res['data']
      // const response = Object.values(res)
      // console.log('Tasks are', response)
    })
  }

  createTask() {
    const title = this.taskForm.value
    this.taskrunnerService.addTask(title).subscribe(res => {
      this.onLoadTasks()
    })
    this.taskForm.reset()
  }

  removeTask(task: Task) {
    this.taskrunnerService.deleteTask(task._id).subscribe(res => {
      this.onLoadTasks()
    })
  }

}
