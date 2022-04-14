import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.interface';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/todos';
  tasks: Task[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Task[]>(this.url).subscribe((todoResponse) => {
      console.log('TODO LIST:', todoResponse);
      this.tasks = todoResponse;
    });
  }
}
