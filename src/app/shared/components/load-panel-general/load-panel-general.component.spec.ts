import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPanelGeneralComponent } from './load-panel-general.component';

describe('LoadPanelGeneralComponent', () => {
  let component: LoadPanelGeneralComponent;
  let fixture: ComponentFixture<LoadPanelGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadPanelGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadPanelGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
