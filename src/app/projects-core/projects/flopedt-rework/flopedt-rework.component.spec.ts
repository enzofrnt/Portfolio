import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopedtReworkComponent } from './flopedt-rework.component';

describe('FlopedtReworkComponent', () => {
  let component: FlopedtReworkComponent;
  let fixture: ComponentFixture<FlopedtReworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlopedtReworkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlopedtReworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
