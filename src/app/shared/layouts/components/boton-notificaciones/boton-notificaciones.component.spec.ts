import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonNotificacionesComponent } from './boton-notificaciones.component';

describe('BotonNotificacionesComponent', () => {
  let component: BotonNotificacionesComponent;
  let fixture: ComponentFixture<BotonNotificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonNotificacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
