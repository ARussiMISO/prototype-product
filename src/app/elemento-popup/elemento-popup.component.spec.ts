import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoPopupComponent } from './elemento-popup.component';

describe('ElementoPopupComponent', () => {
  let component: ElementoPopupComponent;
  let fixture: ComponentFixture<ElementoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
