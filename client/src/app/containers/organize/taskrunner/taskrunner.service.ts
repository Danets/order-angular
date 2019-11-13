import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskrunnerService {

  constructor(private http: HttpClient) { }

  getAllTasks() {
    return this.http.get<Task[]>('/api/task')
}

addTask(task: Task) {
  return this.http.post<Task>('/api/task', task)
}

deleteTask(_id: string) {
  return this.http.post('/api/task/deleteTask', {id: _id})
}

}
