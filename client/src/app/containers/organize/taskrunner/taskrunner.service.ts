import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../../models/task';
import * as moment  from 'moment';

import {Observable, throwError} from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskrunnerService {

  constructor(private http: HttpClient) { }

  getAllTasks(date: moment.Moment): Observable<Task[]> {
    return this.http.post<Task>(`/api/task/${date.format('YYYY-MMMM-DD')}`, {date: date}).pipe(
      map(res => {
        let tasks = res['data'];
        return tasks
      })
    )
}

addTask(task: Task): Observable<Task> {
  return this.http.post<Task>('/api/task', task)
}

deleteTask(_id: string): Observable<Task> {
  return this.http.post<Task>('/api/task/deleteTask', {id: _id})
}

}
