import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDatosUsuarioComponent } from './mis-datos-usuario.component';

describe('MisDatosUsuarioComponent', () => {
  let component: MisDatosUsuarioComponent;
  let fixture: ComponentFixture<MisDatosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisDatosUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisDatosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
