import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustanciasPeligrosasAdministracionPage } from './sustancias-peligrosas-administracion.page';

describe('SustanciasPeligrosasAdministracionPage', () => {
  let component: SustanciasPeligrosasAdministracionPage;
  let fixture: ComponentFixture<SustanciasPeligrosasAdministracionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SustanciasPeligrosasAdministracionPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SustanciasPeligrosasAdministracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
