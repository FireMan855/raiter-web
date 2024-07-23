import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContraseniaPage } from './cambiar-contrasenia.page';

describe('CambiarContraseniaPage', () => {
  let component: CambiarContraseniaPage;
  let fixture: ComponentFixture<CambiarContraseniaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambiarContraseniaPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CambiarContraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
