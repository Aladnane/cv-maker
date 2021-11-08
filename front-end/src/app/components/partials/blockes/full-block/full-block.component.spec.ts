import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBlockComponent } from './full-block.component';

describe('FullBlockComponent', () => {
  let component: FullBlockComponent;
  let fixture: ComponentFixture<FullBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
