import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCompReactiveDrivenComponent } from './reactive-comp-reactive-driven.component';

describe('ReactiveCompReactiveDrivenComponent', () => {
  let component: ReactiveCompReactiveDrivenComponent;
  let fixture: ComponentFixture<ReactiveCompReactiveDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveCompReactiveDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCompReactiveDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
