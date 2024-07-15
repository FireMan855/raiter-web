import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustanciasPeligrosasEditarPage } from './sustancias-peligrosas-editar.page';

describe('SustanciasPeligrosasEditarPage', () => {
  let component: SustanciasPeligrosasEditarPage;
  let fixture: ComponentFixture<SustanciasPeligrosasEditarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SustanciasPeligrosasEditarPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SustanciasPeligrosasEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
