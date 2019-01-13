import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListeComponent } from './to-do-liste.component';

describe('ToDoListeComponent', () => {
  let component: ToDoListeComponent;
  let fixture: ComponentFixture<ToDoListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
