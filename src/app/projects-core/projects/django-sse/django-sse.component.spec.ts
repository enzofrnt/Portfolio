import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoSseComponent } from './django-sse.component';

describe('DjangoSseComponent', () => {
  let component: DjangoSseComponent;
  let fixture: ComponentFixture<DjangoSseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DjangoSseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DjangoSseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
