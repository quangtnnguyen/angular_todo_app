import { Component, Input } from '@angular/core';
import { Todo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngbd-dropdown-split',
  templateUrl: './dropdown-split.component.html',
  styleUrls: ['./dropdown-split.component.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class NgbdDropdownSplit {
  @Input() item: Todo;

  constructor(private todoService: TodoService) { }

  get availableStatusList(): string[] {
    switch (this.item.status) {
      case 'To do':
        return ['In progress', 'Done', 'Archived'];
      case 'In progress':
        return ['Done', 'Archived'];
      case 'Done':
        return ['Archived'];
    }
  }

  changeStatus(status: string): void {
    this.item.status = status;
    this.todoService.updateTodo(this.item).subscribe(newTodo => this.item = newTodo);
  }
}
