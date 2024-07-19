import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasViajeEditarPage } from './categorias-viaje-editar.page';

describe('CategoriasViajeEditarPage', () => {
  let component: CategoriasViajeEditarPage;
  let fixture: ComponentFixture<CategoriasViajeEditarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasViajeEditarPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasViajeEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
