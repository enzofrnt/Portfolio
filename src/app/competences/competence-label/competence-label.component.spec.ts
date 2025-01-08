import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceLabelComponent } from './competence-label.component';

describe('CompetencesLabelsComponent', () => {
  let component: CompetenceLabelComponent;
  let fixture: ComponentFixture<CompetenceLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetenceLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompetenceLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
