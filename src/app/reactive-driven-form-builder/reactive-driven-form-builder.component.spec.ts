import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDrivenFormBuilderComponent } from './reactive-driven-form-builder.component';

describe('ReactiveDrivenFormBuilderComponent', () => {
  let component: ReactiveDrivenFormBuilderComponent;
  let fixture: ComponentFixture<ReactiveDrivenFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveDrivenFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDrivenFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
