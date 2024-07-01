import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxDataGridDefaultComponent } from './dx-data-grid-default.component';

describe('DxDataGridDefaultComponent', () => {
  let component: DxDataGridDefaultComponent;
  let fixture: ComponentFixture<DxDataGridDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DxDataGridDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DxDataGridDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
