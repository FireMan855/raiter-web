import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesTransporteAdministracionPage } from './unidades-transporte-administracion.page';

describe('UnidadesTransporteAdministracionPage', () => {
  let component: UnidadesTransporteAdministracionPage;
  let fixture: ComponentFixture<UnidadesTransporteAdministracionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnidadesTransporteAdministracionPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidadesTransporteAdministracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
