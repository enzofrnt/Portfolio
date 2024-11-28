import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoRagComponent } from './django-rag.component';

describe('DjangoRagComponent', () => {
  let component: DjangoRagComponent;
  let fixture: ComponentFixture<DjangoRagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DjangoRagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DjangoRagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
