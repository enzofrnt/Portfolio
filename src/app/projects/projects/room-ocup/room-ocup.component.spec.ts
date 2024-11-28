import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomOcupComponent } from './room-ocup.component';

describe('RoomOcupComponent', () => {
  let component: RoomOcupComponent;
  let fixture: ComponentFixture<RoomOcupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomOcupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomOcupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
