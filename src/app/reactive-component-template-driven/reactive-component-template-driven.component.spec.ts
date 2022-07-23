import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveComponentTemplateDrivenComponent } from './reactive-component-template-driven.component';

describe('ReactiveComponentTemplateDrivenComponent', () => {
  let component: ReactiveComponentTemplateDrivenComponent;
  let fixture: ComponentFixture<ReactiveComponentTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveComponentTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveComponentTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
