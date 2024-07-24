import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesUsuarioPage } from './detalles-usuario.page';

describe('DetallesUsuarioPage', () => {
  let component: DetallesUsuarioPage;
  let fixture: ComponentFixture<DetallesUsuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesUsuarioPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
