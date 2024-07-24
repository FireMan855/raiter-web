import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosFormularioAdministracionComponent } from './usuarios-formulario-administracion.component';

describe('UsuariosFormularioAdministracionComponent', () => {
  let component: UsuariosFormularioAdministracionComponent;
  let fixture: ComponentFixture<UsuariosFormularioAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosFormularioAdministracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuariosFormularioAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
