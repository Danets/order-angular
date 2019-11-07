import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import {CommonService}  from '../../shared/common.service';

@Component({
  selector: 'app-taskrunner',
  templateUrl: './taskrunner.component.html',
  styleUrls: ['./taskrunner.component.scss']
})
export class TaskrunnerComponent implements OnInit {

  taskForm: FormGroup

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      task: new FormControl('', Validators.minLength(6))
    })
  }

  onSubmit() {
    const {task} = this.taskForm.value
    console.log(task)
    // this.taskForm.clear()
  }

}
