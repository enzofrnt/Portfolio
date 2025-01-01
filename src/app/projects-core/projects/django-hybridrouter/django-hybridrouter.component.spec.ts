import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoHybridrouterComponent } from './django-hybridrouter.component';

describe('DjangoHybridrouterComponent', () => {
  let component: DjangoHybridrouterComponent;
  let fixture: ComponentFixture<DjangoHybridrouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DjangoHybridrouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DjangoHybridrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
