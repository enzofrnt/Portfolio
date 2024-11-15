import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitForDbComponent } from './wait-for-db.component';

describe('WaitForDbComponent', () => {
  let component: WaitForDbComponent;
  let fixture: ComponentFixture<WaitForDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaitForDbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaitForDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
