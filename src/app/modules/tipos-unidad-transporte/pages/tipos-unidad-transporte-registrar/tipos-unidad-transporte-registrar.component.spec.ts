import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposUnidadTransporteRegistrarComponent } from './tipos-unidad-transporte-registrar.component';

describe('TiposUnidadTransporteRegistrarComponent', () => {
  let component: TiposUnidadTransporteRegistrarComponent;
  let fixture: ComponentFixture<TiposUnidadTransporteRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposUnidadTransporteRegistrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposUnidadTransporteRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
