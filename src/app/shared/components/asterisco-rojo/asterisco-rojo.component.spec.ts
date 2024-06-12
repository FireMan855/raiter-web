import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteriscoRojoComponent } from './asterisco-rojo.component';

describe('AsteriscoRojoComponent', () => {
  let component: AsteriscoRojoComponent;
  let fixture: ComponentFixture<AsteriscoRojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsteriscoRojoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsteriscoRojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
