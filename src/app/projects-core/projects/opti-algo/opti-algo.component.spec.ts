import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptiAlgoComponent } from './opti-algo.component';

describe('OptiAlgoComponent', () => {
  let component: OptiAlgoComponent;
  let fixture: ComponentFixture<OptiAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptiAlgoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptiAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
