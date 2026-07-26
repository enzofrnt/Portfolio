import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowrankComponent } from './flowrank.component';

describe('FlowrankComponent', () => {
  let component: FlowrankComponent;
  let fixture: ComponentFixture<FlowrankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlowrankComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlowrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
