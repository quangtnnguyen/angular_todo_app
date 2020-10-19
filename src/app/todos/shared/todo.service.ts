import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private apiUrl = 'https://5f8c3d7bc7aadb001605e139.mockapi.io/api/v1/todos/';  // URL to Web API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getDatePeriod = (): string => {
    const curHour = new Date().getHours();
    return curHour < 12 ? 'Morning' : curHour < 18 ? 'Afternoon' : 'Evening';
  };

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo, this.httpOptions).pipe(
      tap((newTodo: Todo) => this.log(`Added todo w/ id=${newTodo.id}`))
    );
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.apiUrl + todo.id, todo, this.httpOptions).pipe(
      tap(_ => console.log(`Updated todo id=${todo.id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(`TodoService: ${message}`);
  }
}
