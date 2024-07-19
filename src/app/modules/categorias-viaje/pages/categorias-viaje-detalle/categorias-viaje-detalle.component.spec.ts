import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasViajeDetalleComponent } from './categorias-viaje-detalle.component';

describe('CategoriasViajeDetalleComponent', () => {
  let component: CategoriasViajeDetalleComponent;
  let fixture: ComponentFixture<CategoriasViajeDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasViajeDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasViajeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
