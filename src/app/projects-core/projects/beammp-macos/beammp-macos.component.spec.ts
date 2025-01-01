import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeamMPMacosComponent } from './beammp-macos.component';

describe('BeamMPMacosComponent', () => {
  let component: BeamMPMacosComponent;
  let fixture: ComponentFixture<BeamMPMacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeamMPMacosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeamMPMacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
