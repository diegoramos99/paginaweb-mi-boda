import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsientosUbicacion } from './asientos-ubicacion';

describe('AsientosUbicacion', () => {
  let component: AsientosUbicacion;
  let fixture: ComponentFixture<AsientosUbicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsientosUbicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsientosUbicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
