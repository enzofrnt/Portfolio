import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagReportComponent } from './rag-report.component';

describe('RagReportComponent', () => {
  let component: RagReportComponent;
  let fixture: ComponentFixture<RagReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RagReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RagReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
