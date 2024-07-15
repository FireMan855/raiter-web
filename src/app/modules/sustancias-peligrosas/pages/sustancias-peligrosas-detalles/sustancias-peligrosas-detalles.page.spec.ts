import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustanciasPeligrosasDetallesPage } from './sustancias-peligrosas-detalles.page';

describe('SustanciasPeligrosasDetallesPage', () => {
  let component: SustanciasPeligrosasDetallesPage;
  let fixture: ComponentFixture<SustanciasPeligrosasDetallesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SustanciasPeligrosasDetallesPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SustanciasPeligrosasDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
