import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesComponent } from './competence.component';

describe('CompetencesComponent', () => {
  let component: CompetencesComponent;
  let fixture: ComponentFixture<CompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
