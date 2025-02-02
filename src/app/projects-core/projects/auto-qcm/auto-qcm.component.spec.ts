import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQcmComponent } from './auto-qcm.component';

describe('AutoQcmComponent', () => {
  let component: AutoQcmComponent;
  let fixture: ComponentFixture<AutoQcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoQcmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
