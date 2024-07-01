import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesMedidaAdministracionPage } from './unidades-medida-administracion.page';

describe('UnidadesMedidaAdministracionPage', () => {
  let component: UnidadesMedidaAdministracionPage;
  let fixture: ComponentFixture<UnidadesMedidaAdministracionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnidadesMedidaAdministracionPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidadesMedidaAdministracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
