import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGreetingComponent } from './todo-greeting.component';

describe('TodoGreetingComponent', () => {
  let component: TodoGreetingComponent;
  let fixture: ComponentFixture<TodoGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoGreetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
