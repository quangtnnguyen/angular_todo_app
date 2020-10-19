import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../shared/todo.service';

import { NgbdDropdownSplit } from './dropdown-split.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdDropdownSplit],
  providers: [TodoService],
  exports: [NgbdDropdownSplit],
  bootstrap: [NgbdDropdownSplit]
})
export class NgbdDropdownSplitModule { }
