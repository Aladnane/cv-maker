import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMakerComponent } from './cv-maker.component';

describe('CvMakerComponent', () => {
  let component: CvMakerComponent;
  let fixture: ComponentFixture<CvMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
