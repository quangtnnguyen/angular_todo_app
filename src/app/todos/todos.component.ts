import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  inputForm: FormGroup;
  todos: Todo[];

  contentFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]);

  constructor(private todoService: TodoService, fb: FormBuilder) {
    this.getTodos();

    this.inputForm = fb.group({
      content: this.contentFormControl,
    });
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos => this.todos = todos));
  }

  submitForm(): void {
    this.inputForm.markAllAsTouched();

    if (this.inputForm.valid) {
      const content = this.inputForm.value.content;
      this.todoService.addTodo({ content, status: 'To do' } as Todo).subscribe(todo => this.todos.push(todo));
      this.inputForm.reset();
    }
  }
}
