import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEditableComponent } from './input-editable.component';

describe('InputEditableComponent', () => {
  let component: InputEditableComponent;
  let fixture: ComponentFixture<InputEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
