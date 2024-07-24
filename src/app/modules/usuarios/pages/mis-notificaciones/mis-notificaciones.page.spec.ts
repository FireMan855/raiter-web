import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisNotificacionesPage } from './mis-notificaciones.page';

describe('MisNotificacionesPage', () => {
  let component: MisNotificacionesPage;
  let fixture: ComponentFixture<MisNotificacionesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisNotificacionesPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisNotificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
