import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasViajeFormularioComponent } from './categorias-viaje-formulario.component';

describe('CategoriasViajeFormularioComponent', () => {
  let component: CategoriasViajeFormularioComponent;
  let fixture: ComponentFixture<CategoriasViajeFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasViajeFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasViajeFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
