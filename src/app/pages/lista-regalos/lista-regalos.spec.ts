import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegalos } from './lista-regalos';

describe('ListaRegalos', () => {
  let component: ListaRegalos;
  let fixture: ComponentFixture<ListaRegalos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRegalos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRegalos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
