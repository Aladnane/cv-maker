import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTextEditorDialogComponent } from './portfolio-text-editor-dialog.component';

describe('PortfolioTextEditorDialogComponent', () => {
  let component: PortfolioTextEditorDialogComponent;
  let fixture: ComponentFixture<PortfolioTextEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioTextEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTextEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
