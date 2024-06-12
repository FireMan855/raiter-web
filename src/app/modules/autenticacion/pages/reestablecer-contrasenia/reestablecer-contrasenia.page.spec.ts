import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestablecerContraseniaPage } from './reestablecer-contrasenia.page';

describe('ReestablecerContraseniaPage', () => {
  let component: ReestablecerContraseniaPage;
  let fixture: ComponentFixture<ReestablecerContraseniaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReestablecerContraseniaPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReestablecerContraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
