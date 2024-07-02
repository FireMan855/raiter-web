import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposUnidadTransporteAdministracionComponent } from './tipos-unidad-transporte-administracion.component';

describe('TiposUnidadTransporteAdministracionComponent', () => {
  let component: TiposUnidadTransporteAdministracionComponent;
  let fixture: ComponentFixture<TiposUnidadTransporteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposUnidadTransporteAdministracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposUnidadTransporteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
