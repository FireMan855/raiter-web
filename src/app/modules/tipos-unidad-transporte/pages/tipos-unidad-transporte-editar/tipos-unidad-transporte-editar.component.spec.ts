import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposUnidadTransporteEditarComponent } from './tipos-unidad-transporte-editar.component';

describe('TiposUnidadTransporteEditarComponent', () => {
  let component: TiposUnidadTransporteEditarComponent;
  let fixture: ComponentFixture<TiposUnidadTransporteEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposUnidadTransporteEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposUnidadTransporteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
