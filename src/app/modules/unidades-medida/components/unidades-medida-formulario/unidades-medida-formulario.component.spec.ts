import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesMedidaFormularioComponent } from './unidades-medida-formulario.component';

describe('UnidadesMedidaFormularioComponent', () => {
  let component: UnidadesMedidaFormularioComponent;
  let fixture: ComponentFixture<UnidadesMedidaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnidadesMedidaFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidadesMedidaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
