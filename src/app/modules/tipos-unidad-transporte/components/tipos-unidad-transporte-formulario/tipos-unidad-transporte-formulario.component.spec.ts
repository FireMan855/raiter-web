import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposUnidadTransporteFormularioComponent } from './tipos-unidad-transporte-formulario.component';

describe('TiposUnidadTransporteFormularioComponent', () => {
  let component: TiposUnidadTransporteFormularioComponent;
  let fixture: ComponentFixture<TiposUnidadTransporteFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposUnidadTransporteFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposUnidadTransporteFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
