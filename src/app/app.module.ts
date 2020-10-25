import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodosModule } from './todos/todos.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from './shared/todo.service';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, TodosModule, NgbModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
