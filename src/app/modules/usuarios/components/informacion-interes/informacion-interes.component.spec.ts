import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionInteresComponent } from './informacion-interes.component';

describe('InformacionInteresComponent', () => {
  let component: InformacionInteresComponent;
  let fixture: ComponentFixture<InformacionInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacionInteresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
