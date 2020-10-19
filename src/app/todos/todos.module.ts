import { NgModule } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosComponent } from './todos.component';
import { TodoGreetingComponent } from './todo-greeting/todo-greeting.component';
import { TodoService } from './shared/todo.service';
import { CommonModule } from '@angular/common';
import { NgbdDropdownSplitModule } from './dropdown-split/dropdown-split.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoItemComponent,
    TodosComponent,
    TodoGreetingComponent,
  ],
  imports: [FormsModule, CommonModule, NgbdDropdownSplitModule, HttpClientModule],
  providers: [TodoService],
  exports: [TodosComponent],
})
export class TodosModule { }
