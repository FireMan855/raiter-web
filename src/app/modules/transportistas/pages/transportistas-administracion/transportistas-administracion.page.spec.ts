import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistasAdministracionPage } from './transportistas-administracion.page';

describe('TransportistasAdministracionPage', () => {
  let component: TransportistasAdministracionPage;
  let fixture: ComponentFixture<TransportistasAdministracionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportistasAdministracionPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransportistasAdministracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
