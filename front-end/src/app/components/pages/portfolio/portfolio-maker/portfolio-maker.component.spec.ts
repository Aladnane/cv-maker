import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMakerComponent } from './portfolio-maker.component';

describe('PortfolioMakerComponent', () => {
  let component: PortfolioMakerComponent;
  let fixture: ComponentFixture<PortfolioMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
