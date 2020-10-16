import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateFormComponent } from './todo-create-form/todo-create-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosComponent } from './todos.component';
import { TodoGreetingComponent } from './todo-greeting/todo-greeting.component';
import { TodoService } from './shared/todo.service';
import { CommonModule } from '@angular/common';
import { NgbdDropdownSplitModule } from './dropdown-split/dropdown-split.module';

@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodoCreateFormComponent,
    TodosComponent,
    TodoGreetingComponent,
  ],
  imports: [CommonModule, NgbdDropdownSplitModule],
  providers: [TodoService],
  exports: [TodosComponent],
})
export class TodosModule {}
