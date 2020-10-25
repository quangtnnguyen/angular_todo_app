import { Component } from '@angular/core';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-todo-greeting',
  template: `
    <div class="greeting-container h-100 w-100">
      Good {{ DAY_PERIOD }}, Quang.
    </div>
  `,
  styleUrls: ['./todo-greeting.component.scss'],
})
export class TodoGreetingComponent {
  DAY_PERIOD: string;

  constructor(todoService: TodoService) {
    this.DAY_PERIOD = todoService.getDatePeriod();
  }
}
