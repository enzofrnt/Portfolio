import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlappybridComponent } from './flappybrid.component';

describe('FlappybridComponent', () => {
  let component: FlappybridComponent;
  let fixture: ComponentFixture<FlappybridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlappybridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlappybridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
