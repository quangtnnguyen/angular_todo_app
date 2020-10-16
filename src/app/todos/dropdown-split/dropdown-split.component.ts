import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'ngbd-dropdown-split',
  templateUrl: './dropdown-split.component.html',
  styleUrls: ['./dropdown-split.component.scss'],
})
export class NgbdDropdownSplit {
  @Input() item: Todo;

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
}
