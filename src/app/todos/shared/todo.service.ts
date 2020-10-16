import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  TODOS: Todo[] = [
    {
      id: Guid.create(),
      content:
        'Velit laborum et aute dolore consequat. Mollit occaecat labore deserunt duis deserunt sunt magna cillum ipsum eiusmod magna. Consectetur aute laboris qui eu velit dolor ad sint voluptate quis reprehenderit fugiat sunt aute. Voluptate elit reprehenderit fugiat eiusmod proident. In do elit est ex est nisi sint. Labore quis aliquip consequat culpa tempor excepteur. Nisi est aliquip minim qui irure exercitation proident sint excepteur.',
      status: 'To do',
    },
    {
      id: Guid.create(),
      content:
        'Incididunt occaecat tempor nisi sit et tempor. Laborum dolor incididunt dolore veniam anim ut. Enim cillum dolor consectetur deserunt duis excepteur ut commodo exercitation dolor. Laboris voluptate cillum id non elit eu amet anim.',
      status: 'Archived',
    },
    {
      id: Guid.create(),
      content:
        'Esse nostrud ea fugiat id commodo enim duis nisi. Nulla enim quis tempor veniam ullamco Lorem est cillum quis. Consectetur in consequat proident mollit ut ea. Aute elit nisi pariatur est minim consectetur in proident tempor duis ullamco. Veniam irure velit occaecat sunt amet sint culpa esse ea ea pariatur eu. Ea nisi eu eu nulla nostrud tempor quis aliquip velit voluptate.',
      status: 'In progress',
    },
    {
      id: Guid.create(),
      content:
        'Voluptate non in nulla id labore aute ut eu eiusmod qui veniam incididunt. Ut adipisicing nostrud ut Lorem esse magna aliqua minim sunt fugiat et. Dolor laborum anim nostrud consectetur cupidatat anim. Dolor proident duis id velit labore sit ut aute ipsum et fugiat ea. Anim eiusmod veniam exercitation elit pariatur laborum. Labore fugiat aute magna dolor nisi. Laboris exercitation do laborum et est quis dolor voluptate voluptate irure.',
      status: 'Done',
    },
    {
      id: Guid.create(),
      content:
        'Irure cillum minim elit laborum sit occaecat eu reprehenderit. Consequat eu magna Lorem incididunt nisi eu id dolore veniam elit sit dolore laborum in. Ipsum incididunt tempor enim officia.',
      status: 'Done',
    },
    {
      id: Guid.create(),
      content:
        'Voluptate occaecat do ipsum occaecat est commodo aliqua laborum cillum nulla non voluptate. Id eu ea exercitation anim exercitation duis amet mollit amet. Laboris nisi do nostrud veniam mollit sunt quis sit eiusmod deserunt et ut. Ea dolor nisi Lorem enim cupidatat.',
      status: 'Archived',
    },
    {
      id: Guid.create(),
      content:
        'Veniam ea adipisicing id quis mollit Lorem elit aliqua ipsum. Ullamco in elit nisi veniam sit ex commodo eu ipsum. Quis nisi officia sint veniam adipisicing eu tempor. Proident in nulla esse ad ea reprehenderit do et ut occaecat. Aliqua ex magna nisi esse aliquip voluptate Lorem id id.',
      status: 'To do',
    },
    {
      id: Guid.create(),
      content:
        'Deserunt proident enim non ea ea non adipisicing. Mollit incididunt aliquip adipisicing nisi dolore irure deserunt excepteur ullamco irure tempor est minim. Culpa ea sint sint ipsum in duis tempor. Mollit mollit do deserunt Lorem id nostrud non nisi pariatur proident. Id aliqua consectetur irure eiusmod cillum. Ipsum voluptate elit labore occaecat aliqua qui officia. Mollit ipsum pariatur adipisicing Lorem culpa minim incididunt.',
      status: 'In progress',
    },
    {
      id: Guid.create(),
      content:
        'Voluptate occaecat do ipsum occaecat est commodo aliqua laborum cillum nulla non voluptate. Id eu ea exercitation anim exercitation duis amet mollit amet. Laboris nisi do nostrud veniam mollit sunt quis sit eiusmod deserunt et ut. Ea dolor nisi Lorem enim cupidatat.',
      status: 'Archived',
    },
    {
      id: Guid.create(),
      content:
        'Veniam ea adipisicing id quis mollit Lorem elit aliqua ipsum. Ullamco in elit nisi veniam sit ex commodo eu ipsum. Quis nisi officia sint veniam adipisicing eu tempor. Proident in nulla esse ad ea reprehenderit do et ut occaecat. Aliqua ex magna nisi esse aliquip voluptate Lorem id id.',
      status: 'To do',
    },
    {
      id: Guid.create(),
      content:
        'Deserunt proident enim non ea ea non adipisicing. Mollit incididunt aliquip adipisicing nisi dolore irure deserunt excepteur ullamco irure tempor est minim. Culpa ea sint sint ipsum in duis tempor. Mollit mollit do deserunt Lorem id nostrud non nisi pariatur proident. Id aliqua consectetur irure eiusmod cillum. Ipsum voluptate elit labore occaecat aliqua qui officia. Mollit ipsum pariatur adipisicing Lorem culpa minim incididunt.',
      status: 'In progress',
    },
  ];

  getDatePeriod = (): string => {
    const curHour = new Date().getHours();
    return curHour < 12 ? 'Morning' : curHour < 18 ? 'Afternoon' : 'Evening';
  };

  getToDos = (): Todo[] => {
    return this.TODOS;
  };
}
