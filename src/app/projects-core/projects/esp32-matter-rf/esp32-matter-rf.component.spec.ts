import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esp32MatterRfComponent } from './esp32-matter-rf.component';

describe('Esp32MatterRfComponent', () => {
  let component: Esp32MatterRfComponent;
  let fixture: ComponentFixture<Esp32MatterRfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Esp32MatterRfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Esp32MatterRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
