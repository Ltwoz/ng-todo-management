import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [
    {
      id: 1,
      title: 'Create a new project',
      description: 'Create a new project with Angular CLI',
      status: 'OPEN',
    }
  ];

  constructor() { }

  getAllTodo() {
    return this.todos;
  }
}
