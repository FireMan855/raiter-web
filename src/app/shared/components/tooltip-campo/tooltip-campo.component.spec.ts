import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipCampoComponent } from './tooltip-campo.component';

describe('TooltipCampoComponent', () => {
  let component: TooltipCampoComponent;
  let fixture: ComponentFixture<TooltipCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipCampoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
