import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirConstanciaSituacionFiscalComponent } from './subir-constancia-situacion-fiscal.component';

describe('SubirConstanciaSituacionFiscalComponent', () => {
  let component: SubirConstanciaSituacionFiscalComponent;
  let fixture: ComponentFixture<SubirConstanciaSituacionFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirConstanciaSituacionFiscalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubirConstanciaSituacionFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
