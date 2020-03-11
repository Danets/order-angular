import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../../models/task';
import * as moment  from 'moment';

import {Observable, of, throwError} from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskrunnerService {

  private url = 'https://moment-calendar.firebaseio.com/tasks'

  constructor(private http: HttpClient) { }

  getAllTasks(date: moment.Moment): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.url}/${date.format('DD-MM-YYYY')}.json`).pipe(
      map(tasks => {
        if (!tasks) {
          return []
        }
        return Object.keys(tasks).map(key => {
          return {...tasks[key], _id: key}
        })
      })
    )
}

// getAllTasks(): Observable<Task[]> {
//   return this.http.get<Task[]>('/api/task').pipe(
//     map(res => {
//       let tasks = res['data'];
//       return tasks
//     })
//   )
// }

addTask(task: Task): Observable<Task> {
  return this.http.post<Task>(`${this.url}/${task.date}.json`, task).pipe(
    map(res => {
      return {...task}
    })
  )
}

deleteTask(task: Task): Observable<void> {
  return this.http.delete<void>(`${this.url}/${task.date}/${task._id}.json`)
}

}
