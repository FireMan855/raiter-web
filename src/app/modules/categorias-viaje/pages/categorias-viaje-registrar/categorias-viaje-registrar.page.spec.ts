import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasViajeRegistrarPage } from './categorias-viaje-registrar.page';

describe('CategoriasViajeRegistrarPage', () => {
  let component: CategoriasViajeRegistrarPage;
  let fixture: ComponentFixture<CategoriasViajeRegistrarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriasViajeRegistrarPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasViajeRegistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
