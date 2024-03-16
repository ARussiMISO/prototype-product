import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorServicioComponent } from './buscador-servicio.component';

describe('BuscadorServicioComponent', () => {
  let component: BuscadorServicioComponent;
  let fixture: ComponentFixture<BuscadorServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
