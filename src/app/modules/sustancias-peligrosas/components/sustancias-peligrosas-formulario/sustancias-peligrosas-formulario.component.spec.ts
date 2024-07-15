import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustanciasPeligrosasFormularioComponent } from './sustancias-peligrosas-formulario.component';

describe('SustanciasPeligrosasFormularioComponent', () => {
  let component: SustanciasPeligrosasFormularioComponent;
  let fixture: ComponentFixture<SustanciasPeligrosasFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SustanciasPeligrosasFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SustanciasPeligrosasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
