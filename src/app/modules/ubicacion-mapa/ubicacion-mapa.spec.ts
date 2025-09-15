import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionMapa } from './ubicacion-mapa';

describe('UbicacionMapa', () => {
  let component: UbicacionMapa;
  let fixture: ComponentFixture<UbicacionMapa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicacionMapa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionMapa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
