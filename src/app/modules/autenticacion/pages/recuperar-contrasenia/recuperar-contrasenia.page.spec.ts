import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContraseniaPage } from './recuperar-contrasenia.page';

describe('RecuperarContraseniaPage', () => {
  let component: RecuperarContraseniaPage;
  let fixture: ComponentFixture<RecuperarContraseniaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarContraseniaPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuperarContraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
