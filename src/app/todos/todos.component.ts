import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo.model';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos => this.todos = todos));
  }

  addTodo(content: string): void {
    content = content.trim();
    if (content.length > 250) {
      return;
    }
    this.todoService.addTodo({ content, status: 'To do' } as Todo).subscribe(todo => this.todos.push(todo));
  }
}
