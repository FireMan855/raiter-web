import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasViajeAdministracionComponent } from './categorias-viaje-administracion.component';

describe('CategoriasViajeAdministracionComponent', () => {
  let component: CategoriasViajeAdministracionComponent;
  let fixture: ComponentFixture<CategoriasViajeAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasViajeAdministracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasViajeAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
