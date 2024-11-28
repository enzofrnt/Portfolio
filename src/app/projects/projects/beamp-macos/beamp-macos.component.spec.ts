import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeampMacosComponent } from './beamp-macos.component';

describe('BeampMacosComponent', () => {
  let component: BeampMacosComponent;
  let fixture: ComponentFixture<BeampMacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeampMacosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeampMacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
