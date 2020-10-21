import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from './shared/todo.model';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  inputForm: FormGroup;
  todos: Todo[];

  constructor(private todoService: TodoService, fb: FormBuilder) {
    this.inputForm = fb.group({
      content: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos => this.todos = todos));
  }

  submitForm(content: string): void {
    this.inputForm.markAsTouched();
    if (this.inputForm.valid) {
      content = this.inputForm.getRawValue().content.trim();
      this.todoService.addTodo({ content, status: 'To do' } as Todo).subscribe(todo => this.todos.push(todo));
      this.inputForm.reset();
    }
  }
}
