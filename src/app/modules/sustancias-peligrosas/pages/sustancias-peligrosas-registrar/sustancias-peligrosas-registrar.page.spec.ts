import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustanciasPeligrosasRegistrarPage } from './sustancias-peligrosas-registrar.page';

describe('SustanciasPeligrosasRegistrarPage', () => {
  let component: SustanciasPeligrosasRegistrarPage;
  let fixture: ComponentFixture<SustanciasPeligrosasRegistrarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SustanciasPeligrosasRegistrarPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SustanciasPeligrosasRegistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
